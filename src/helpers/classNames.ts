export function classNames(...classnames: (string | undefined)[]) {
  const definedClassNames = classnames.filter((className) => className !== undefined);

  if (definedClassNames.length === 0) {
    return undefined;
  }

  return definedClassNames.join(' ');
}
