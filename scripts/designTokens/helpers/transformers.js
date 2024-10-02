/**
 * @param {any} value
 * @returns {boolean}
 */
function isSize(value) {
  return typeof value === 'string' && value.endsWith('px');
}

export function shadowCss(value) {
  return `${value.offsetX || 0} ${value.offsetY || 0} ${value.blur || 0} ${value.spread || 0} ${value.color} ${value.inset ? 'inset' : ''}`.trim();
}

/**
 * Transforms `16px` to `1rem`.
 *
 * @param {string} value
 * @returns {string}
 */
export function pxToRem(value) {
  const rawValue = value.split('px')[0];
  return `${Number.parseInt(rawValue) / 16}rem`;
}

/**
 * Transforms `{color.neutral.900}` to `color/neutral/900`.
 *
 * @param {string} alias
 * @returns {string}
 */
export function aliasToValue(alias) {
  return alias.replace('{', '').replace('}', '').replaceAll('.', '/');
}

/**
 * Transforms token object value to string.
 *
 * @param {object} obj
 * @returns {string}
 */
export function objectValueToString(obj) {
  const items = Object.entries(obj).reduce((acc, [k, v]) => {
    acc[k] = isSize(v) ? pxToRem(v) : v;
    return acc;
  }, {});

  return JSON.stringify(items, null, 2);
}
