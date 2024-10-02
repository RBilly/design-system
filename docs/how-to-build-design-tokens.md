# How to build design tokens

1. Install [Design Tokens Manager](https://www.figma.com/community/plugin/1263743870981744253) on
   Figma if it is not already present
2. Open
   the [Fundamentals file](https://www.figma.com/file/Svp4Vqs9rU5iJViXL3ARfC/%5BDS%5D-Fundamentals-v0.1.0?type=design&node-id=57-34&mode=design&t=VnbdwbCqMzj0WOoO-0)
3. Open the plugin menu and select "Design Tokens Manager"
4. Click on "Export Tokens" button
5. Download the `.zip` file containing the design tokens json files into
   the `designTokens/exportFigma` directory
6. Launch the design token building script:
    ```shell
    pnpm build:designTokens
    ```
7. Find the design tokens file in `src/styles/designTokens.ts` and the file used to create the
   Storybook documentation in `src/styles/storybook/designTokens.json`
