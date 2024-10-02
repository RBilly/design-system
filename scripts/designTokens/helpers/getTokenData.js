import camelCase from 'camelcase';

/**
 * @param  {...string} args
 * @returns {string}
 */
function getFigmaVariable(...args) {
  return args.join('/');
}

/**
 * @param  {...string} args
 * @returns {string}
 */
function getVariableName(...args) {
  return camelCase(args.join('-'));
}

/**
 * @param {object} token
 * @param {Array.<string>} path
 * @param {(value: string) => string} valueTransformer
 * @param {boolean} keepValue
 * @returns {object}
 */
export function getTokenData(token, path, valueTransformer = (v) => v, keepValue = false) {
  const data = keepValue ? { rawValue: token.$value } : {};
  return {
    ...data,
    type: token.$type,
    figmaVariable: getFigmaVariable(...path),
    description: token.$description,
    name: getVariableName(...path),
    value: valueTransformer(token.$value),
    modifier: path.at(-1)
  };
}
