# Component development guidelines

- [Component API definition](#component-api-definition)
- [Naming convention](#naming-convention)
- [File and folder structure](#file-and-folder-structure)
- [Component library entry point](#component-library-entry-point)
- [Headless component library](#headless-component-library)
- [CSS](#css)
- [Storybook guidelines](#storybook-guidelines)
- [Tests](#tests)

<a name="component-api-definition"></a>

## Component API definition

Before coding, the first thing to do is define the component API.

The component API should be a mix between the component API defined by designers in Figma and the public API of the corresponding component in the [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) library (if such a component exists).

The main objective is to decide which prop-types should be publicly exposed to consumers.

<a name="naming-convention"></a>

## Naming convention

The following naming convention rules must be followed:

- Component name must use **PascalCase** (e.g. `MyComponentName`)
- Constants name must use **SCREAMING_SNAKE_CASE** (e.g. `MY_CONSTANT_NAME`)
- Everything else must use **camelCase** (e.g. `myPropName`, `myHelperName`, `myImageName`)

### Do ✅

```ts
const DEFAULT_CHILDREN = 'click';

type ButtonProps = { ... };

export function Button({ children = DEFAULT_CHILDREN, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}
```

### Don't ⛔

```ts
const defaultChildren = 'click';

type buttonProps = { ... };

export function button({ children = defaultChildren, onClick }: buttonProps) {
  return <button onClick={onClick}>{children}</button>;
}
```

<a name="file-and-folder-structure"></a>

## File and folder structure

The following file and folder structure rules must be followed:

- Component must have its own folder
- An `index.ts` file with a named export must be present
- Code related to the component (styles, stories, tests, helpers) must be located next to it (see https://kentcdodds.com/blog/colocation)
- Helper functions must be placed in a dedicated folder

### Do ✅

```bash
├── src
│   ├── helpers
│   │   ├── myGlobalHelper.test.ts
│   │   ├── myGlobalHelper.ts
│   ├── MyComponent
│   │   ├── helpers
│   │   │   ├── myLocalHelper.test.ts
│   │   │   ├── myLocalHelper.ts
│   │   ├── SubComponent
│   │   │   ├── index.ts
│   │   │   ├── SubComponent.css.ts
│   │   │   ├── SubComponent.tsx
│   │   ├── index.ts
│   │   ├── MyComponent.css.ts
│   │   ├── MyComponent.stories.tsx
│   │   ├── MyComponent.test.tsx
│   │   ├── MyComponent.tsx
│   ├── index.ts
```

### Don't ⛔

```bash
├── src
│   ├── MyComponent
│   │   ├── MyComponent.css.ts
│   │   ├── MyComponent.tsx
│   │   ├── myLocalHelper.ts
│   │   ├── SubComponent.css.ts
│   │   ├── SubComponent.tsx
│   ├── stories
│   │   ├── MyComponent.stories.tsx
│   ├── tests
│   │   ├── MyComponent.test.tsx
│   │   ├── myLocalHelper.test.ts
│   ├── index.ts
```

<a name="component-library-entry-point"></a>

## Component library entry point

Don't forget to export the component in the library entry point to make it available to consumers:

```ts
// `src/index.ts`

export { MyComponent } from './MyComponent';
...
```

<a name="headless-component-library"></a>

## Headless component library

Components must not be developed from scratch. Use instead components and components API from the headless component library [React Aria Components](https://react-spectrum.adobe.com/react-aria/components.html) as a basis to create our own components (see the [headless component library ADR](https://wiki.merckgroup.com/confluence/display/PAD/ADR+-+Component+library+-+Headless+component+libraries) to find out more about this choice).

If a special case cannot be handled with a component from React Aria Components library (e.g. custom DOM structure), [React Aria Hooks](https://react-spectrum.adobe.com/react-aria/hooks.html) can be used (see https://react-spectrum.adobe.com/react-aria/advanced.html#hooks).

<a name="css"></a>

## CSS

[vanilla-extract](https://vanilla-extract.style/) is the only way to write CSS in the component library repository (see the [CSS ADR](https://wiki.merckgroup.com/confluence/display/PAD/ADR+-+Component+library+-+CSS) to find out more about this choice).

### Do ✅

```ts
// Button.css.ts

import { recipe } from '@vanilla-extract/recipes';

const button = recipe({
  base: {
    display: 'flex',
    ...
  },
  variants: {
    size: {
      sm: { ... },
      md: { ... }
    }
  },
  ...
});

export const styles = { button };
```

### Don't ⛔

```css
/* Button.css */

.button {
  display: flex;
  ...
}

.button--sm { ... }
.button--md { ... }
```

```ts
// Button.tsx

type ButtonProps = { ... };

export function Button({ children }: ButtonProps) {
  return <button style={{ display: 'flex', ... }}>{children}</button>;
}
```

<a name="storybook-guidelines"></a>

## Storybook guidelines

Refer to the [Storybook guidelines](https://wiki.merckgroup.com/confluence/display/PAD/Guideline+-+Storybook) on Confluence to learn about best practices.

<a name="tests"></a>

## Tests

Simple unit tests can be written to validate the desired behavior of a given helper function.

For component testing, a test should not be written just for the sake of writing tests.
Instead, tests should be written to avoid regression on specific behaviors that may be accidentally forgotten by a developer in the future.

Therefore, if a regression occurs, a specific test must be added to ensure that the problem has been identified and that nobody will make this mistake again.
