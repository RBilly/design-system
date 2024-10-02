/**
 * @param {object} obj
 * @returns {boolean}
 */
export function isToken(obj) {
  return typeof obj === 'object' && obj !== null && '$value' in obj;
}
