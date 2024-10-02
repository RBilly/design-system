import fs from 'node:fs';
import camelCase from 'camelcase';
import decompress from 'decompress';

const ROOT_PATH = './scripts/designTokens';
const ASSETS_PATH = `${ROOT_PATH}/assets`;
const EXPORT_PATH = `${ROOT_PATH}/exportFigma`;
const EXPORT_FILE = `${EXPORT_PATH}/design-tokens.zip`;
const EXPORT_TMP_PATH = `${EXPORT_PATH}/tmp`;

const FILES_MAP = {
  alias: 'Alias Token.Mode 1.tokens.json',
  color: 'Brand Reference.Mode 1.tokens.json',
  shadow: 'effect.styles.tokens.json',
  typography: 'text.styles.tokens.json'
};

const FONT_FAMILY = [
  '"Noto Sans Display"',
  '"Noto Sans SC"',
  '"Noto Sans JP"',
  '"Noto Sans KR"',
  'sans-serif'
].join(', ');

function sanitizeFileContent(fileContent) {
  // Remove new lines in comments to avoid issues in output.
  return fileContent.replace(/\\n/g, '');
}

function sanitizeDesignToken(designToken) {
  // Design token manager plugin handles multiple shadows
  // but W3C format (and Style Dictionary Utils) only one.
  // See https://github.com/design-tokens/community-group/issues/100
  if (designToken.$type === 'shadow') {
    return {
      ...designToken,
      $value: designToken.$value[0]
    };
  }

  // Figma only returns `Noto Sans` as font family name
  // but `Noto Sans Display` and CJK fonts are used.
  if (designToken.$type === 'typography') {
    return {
      ...designToken,
      $value: {
        ...designToken.$value,
        fontFamily: FONT_FAMILY
      }
    };
  }

  return designToken;
}

function isDesignToken(input) {
  return input.$value !== undefined;
}

function sanitizeDesignTokensTree(designTokens) {
  // Transform all keys to camel case.
  return Object.entries(designTokens).reduce((acc, [k, v]) => {
    const key = camelCase(k);
    acc[key] = isDesignToken(v) ? sanitizeDesignToken(v) : sanitizeDesignTokensTree(v);
    return acc;
  }, {});
}

// 1. Clean 'assets' directory.
fs.rmSync(ASSETS_PATH, { recursive: true });
fs.mkdirSync(ASSETS_PATH);

// 2. Extract zip exported from figma in temp folder
decompress(EXPORT_FILE, EXPORT_TMP_PATH).then(() => {
  // 3. Create sanitized asset files from exported files.
  for (const [designTokenType, filename] of Object.entries(FILES_MAP)) {
    const filePath = `${EXPORT_TMP_PATH}/${filename}`;

    if (!fs.existsSync(filePath)) {
      console.warn(`WARNING: "${filePath}" file does not exist.`);
      return;
    }

    const fileContent = sanitizeFileContent(fs.readFileSync(filePath, 'utf8'));
    const designTokens = sanitizeDesignTokensTree(JSON.parse(fileContent));

    fs.writeFileSync(
      `${ASSETS_PATH}/${designTokenType}.tokens.json`,
      JSON.stringify(designTokens, null, 2)
    );
  }

  // 4. Remove temp folder
  fs.rmSync(EXPORT_TMP_PATH, { recursive: true });
});
