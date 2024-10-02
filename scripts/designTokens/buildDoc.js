import fs from 'node:fs';
import { capitalize } from './helpers/capitalize.js';
import { getTokenData } from './helpers/getTokenData.js';
import { isSubCategory } from './helpers/isSubCategory.js';
import { isToken } from './helpers/isToken.js';
import * as transformers from './helpers/transformers.js';

const ASSETS_PATH = './scripts/designTokens/assets';
const SOURCE_PATH = './docs/assets';

/**
 * Parse the content of design token files to generate a developer-friendly object
 * that will be used as a basis for the Storybook stories related to design tokens.
 *
 * @param {object} obj
 * @param {object} options
 * @param {Array.<string>} options.path
 * @param {Array.<string>} options.maxPath
 * @param {(value: string) => string} options.valueTransformer
 * @returns {object}
 */
function parse(obj, options = {}) {
  const { path = [], maxPath, valueTransformer, keepValue } = options;

  // White token is the only global color token with a single value.
  // This is a hack to handle the display of colors in the Storybook documentation.
  if (isToken(obj) && obj.$value === '#ffffff') {
    return {
      name: 'White',
      values: [getTokenData(obj, path, valueTransformer)]
    };
  }

  if (isToken(obj)) {
    return getTokenData(obj, path, valueTransformer, keepValue);
  }

  const getSubCategoryValues = () =>
    Object.entries(obj).reduce(
      (acc, [key, value]) => acc.concat(parse(value, { ...options, path: path.concat([key]) })),
      []
    );

  // Flatten sub categories.
  if (maxPath && path.length > maxPath) {
    return getSubCategoryValues();
  }

  if (isSubCategory(obj)) {
    return {
      name: capitalize(path.at(-1)),
      values: getSubCategoryValues()
    };
  }

  return Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = parse(value, { ...options, path: path.concat([key]) });
    return acc;
  }, {});
}

// 1. Get design tokens from assets directory.
const designTokens = fs.readdirSync(ASSETS_PATH).reduce((acc, filename) => {
  const key = filename.split('.')[0];
  const fileContent = fs.readFileSync(`${ASSETS_PATH}/${filename}`, 'utf8');
  acc[key] = JSON.parse(fileContent);
  return acc;
}, {});

// 2. Create the documentation object.
const doc = {
  global: {
    colors: parse(designTokens.color.color, {
      path: ['color']
    }),
    spacing: parse(designTokens.alias.spacing, {
      path: ['spacing'],
      valueTransformer: transformers.pxToRem
    }),
    typography: parse(designTokens.typography.typography, {
      path: ['typography']
    })
  },
  alias: {
    colors: parse(designTokens.alias.color, {
      path: ['color'],
      // Flatten `color/text/link` path.
      maxPath: 2,
      valueTransformer: transformers.aliasToValue
    }),
    radius: parse(designTokens.alias.radius, {
      path: ['radius']
    }),
    borders: parse(designTokens.alias.border, {
      path: ['border']
    }),
    opacity: parse(designTokens.alias.opacity, {
      path: ['opacity']
    }),
    shadows: parse(designTokens.shadow.shadow, {
      path: ['shadows'],
      valueTransformer: transformers.shadowCss,
      keepValue: true
    })
  }
};

// 3. Create the file that will be used to create the Storybook documentation.
fs.writeFileSync(`${SOURCE_PATH}/designTokens.json`, JSON.stringify(doc, null, 2));
