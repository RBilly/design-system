import { isToken } from './isToken.js';

/**
 * @param {object} obj
 * @returns {boolean}
 */
export function isSubCategory(obj) {
  return isToken(Object.values(obj)[0]);
}
