# How to add icons

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
