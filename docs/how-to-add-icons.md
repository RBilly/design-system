# How to add icons

Only the icons listed on the [Fundamentals icons page on Figma](https://www.figma.com/file/Svp4Vqs9rU5iJViXL3ARfC/%5BDS%5D-Fundamentals-v0.1.0?type=design&node-id=531-18455&mode=design&t=MgCSr7PQmkzf1ixV-0) can be added.

## Add custom SVG icons

1. Verify the name of your `.svg` file. It should reflect the expected component name.
   For example a file named `Test.svg` will generate a react component named `TestIcon`.
2. Add the `.svg` file in `src/icons/svg` directory expected name

## Build icons

```sh
# Generate a custom React component for each `.svg` file present in `./src/icons/svg` via Handlebar template.
npm run build:icons

# Transform all the `.svg` imports used in our custom components into React components via `esbuild-plugin-svgr`.
npm run build

# Transform all the `.svg` imports used in our custom components into React components via `vite-plugin-svgr`.
npm run build:storybook
```

See:

- [`esbuild-plugin-svgr` package](https://github.com/kazijawad/esbuild-plugin-svgr)
- [`vite-plugin-svgr` package](https://github.com/kazijawad/esbuild-plugin-svgr)
- [SVGR documentation](https://react-svgr.com/docs/webpack/)
