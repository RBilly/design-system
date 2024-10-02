import { describe, expect, it } from 'vitest';
import { groupArgTypes } from './arg-utils';

describe('sortArgTypes', () => {
  it('should correctly categorize argument types', () => {
    const result = groupArgTypes(['Category1', ['arg1', 'arg2']], ['Category2', ['arg3']]);

    const expected = {
      arg1: { table: { subcategory: 'Category1' } },
      arg2: { table: { subcategory: 'Category1' } },
      arg3: { table: { subcategory: 'Category2' } }
    };

    expect(result).toEqual(expected);
  });

  it('should return an empty object when no categories are provided', () => {
    const result = groupArgTypes();
    expect(result).toEqual({});
  });

  it('should handle empty category arrays correctly', () => {
    const result = groupArgTypes(['Category1', []], ['Category2', ['arg1', 'arg2']]);

    const expected = {
      arg1: { table: { subcategory: 'Category2' } },
      arg2: { table: { subcategory: 'Category2' } }
    };

    expect(result).toEqual(expected);
  });

  it('should handle duplicate argument names, last one wins', () => {
    const result = groupArgTypes(['Category1', ['arg1']], ['Category2', ['arg1']]);

    const expected = {
      arg1: { table: { subcategory: 'Category2' } }
    };

    expect(result).toEqual(expected);
  });
});
