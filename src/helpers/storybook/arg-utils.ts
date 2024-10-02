export const groupArgTypes = <ArgName extends string>(
  ...categories: [string, ArgName[]][]
): Partial<Record<ArgName, object>> =>
  categories.reduce(
    (acc, [categoryName, argNames]) => {
      for (const argName of argNames) {
        acc[argName] = { table: { subcategory: categoryName } };
      }
      return acc;
    },
    {} as Partial<Record<ArgName, object>>
  );
