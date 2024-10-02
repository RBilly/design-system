import StyleDictionary from 'style-dictionary-utils';
import { isTypography } from 'style-dictionary-utils/dist/filter/isTypography.js';
import { javascriptEsm } from 'style-dictionary-utils/dist/format/javascript-esm.js';
import { w3cTokenJsonParser } from 'style-dictionary-utils/dist/parser/w3c-token-json-parser.js';
import { dimensionPixelToRem } from 'style-dictionary-utils/dist/transformer/dimension-pixel-to-rem.js';
import formats from 'style-dictionary/lib/common/formats.js';

const SCRIPT_PATH = './scripts/designTokens';
const SOURCE_PATH = './src/styles';
const PUBLIC_PATH = './public';

function pxToRem(tokenName, value) {
  return dimensionPixelToRem.transformer({ name: tokenName, value });
}

// Transform font attributes from pixel to rem.
StyleDictionary.registerTransform({
  name: 'font/pxToRem',
  type: 'value',
  matcher: isTypography,
  transformer: (token) => ({
    ...token.value,
    fontSize: pxToRem(token.name, token.value.fontSize),
    lineHeight: pxToRem(token.name, token.value.lineHeight)
  })
});

// Transform spacing attributes from pixel to rem.
StyleDictionary.registerTransform({
  name: 'spacing/pxToRem',
  type: 'value',
  matcher: (token) => token.name.startsWith('spacing'),
  transformer: dimensionPixelToRem.transformer
});

// Opacity values from string to number.
StyleDictionary.registerTransform({
  name: 'opacityAsFloat',
  type: 'value',
  matcher: (token) => token.name.startsWith('opacity'),
  transformer: (token) => Number.parseFloat(token.value)
});

StyleDictionary.registerFormat({
  name: 'typescript/custom',
  formatter: (params) => {
    return javascriptEsm(params)
      .replace('export default', 'export const designTokens =')
      .replace('};', '} as const;');
  }
});

StyleDictionary.registerFormat({
  name: 'typescript/flat',
  formatter: (params) => {
    return formats['javascript/module-flat'](params)
      .replace('module.exports', 'export const designTokens')
      .replace('};', '} as const;');
  }
});

const styleDictionary = StyleDictionary.extend({
  source: [`${SCRIPT_PATH}/assets/*.json`],
  parsers: [w3cTokenJsonParser],
  platforms: {
    css: {
      transforms: [
        // Order matters.
        // Style Dictionary transformers.
        'attribute/cti',
        'name/cti/camel',
        'time/seconds',
        'content/icon',
        'size/rem',
        'color/hex',
        // Custom transformers.
        'spacing/pxToRem',
        'opacityAsFloat',
        'font/pxToRem',
        // Style Dictionary Utils transformer.
        'shadow/css',
        'font/css'
      ],
      files: [
        {
          // Public export used by Foundation.
          format: 'scss/variables',
          destination: `${PUBLIC_PATH}/designTokens.scss`,
          options: {
            // Use variable references.
            outputReferences: true
          }
        }
      ]
    },
    js: {
      transforms: [
        // Order matters.
        // Style Dictionary transformers.
        'attribute/cti',
        'name/cti/camel',
        'size/rem',
        'color/hex',
        // Custom transformers.
        'spacing/pxToRem',
        'opacityAsFloat',
        'font/pxToRem',
        // Style Dictionary Utils transformer.
        'shadow/css',
        'font/css'
      ],
      files: [
        {
          // Private export exposed to Foundation in the UI kit entry point.
          format: 'typescript/flat',
          destination: `${SOURCE_PATH}/designTokensMap.ts`
        },
        {
          // Private export used in the UI kit.
          format: 'typescript/custom',
          destination: `${SOURCE_PATH}/designTokens.ts`
        }
      ]
    }
  }
});

styleDictionary.buildAllPlatforms();
