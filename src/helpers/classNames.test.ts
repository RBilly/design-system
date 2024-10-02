import { describe, expect, it } from 'vitest';
import { classNames } from './classNames';

describe('classNames', () => {
  it('Should concat multiple class names.', () => {
    expect(classNames('foo', 'bar')).toBe('foo bar');
    expect(classNames('foo', 'bar', 'baz')).toBe('foo bar baz');
    expect(classNames('foo', 'bar baz')).toBe('foo bar baz');
  });

  it('Should filter undefined value.', () => {
    expect(classNames(undefined)).toBe(undefined);
    expect(classNames('foo', undefined)).toBe('foo');
  });

  it('Should do nothing if only one class name is provided.', () => {
    expect(classNames('foo')).toBe('foo');
  });
});
