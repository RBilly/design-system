import fs from 'node:fs';
import Handlebars from 'handlebars';

const RAW_SVG_PATH = './src/icons/svg';
const EXPORT_PATH = './src/icons';
const INDEX_TEMPLATE_PATH = './scripts/icons/index.handlebars';
const ICON_TEMPLATE_PATH = './scripts/icons/icon.handlebars';

// 1. Clean previously generated files.
fs.rmSync(`${EXPORT_PATH}/index.ts`);
for (const filename of fs.readdirSync(EXPORT_PATH)) {
  if (filename.endsWith('Icon.tsx')) {
    fs.rmSync(`${EXPORT_PATH}/${filename}`);
  }
}

// 2. List raw SVGs to process.
const existingIcons = fs.readdirSync(RAW_SVG_PATH).map((file) => {
  const filename = file.split('.svg')[0];
  return {
    name: `Svg${filename}`,
    componentName: `${filename}Icon`,
    relativePath: `${RAW_SVG_PATH}/${file}`,
    importPath: `./svg/${file}`
  };
});

// 3.1 Get index template.
const indexTemplateContent = fs.readFileSync(INDEX_TEMPLATE_PATH, { encoding: 'utf-8' });
const indexTemplate = Handlebars.compile(indexTemplateContent);

// 3.2 Build index file.
fs.writeFileSync(`${EXPORT_PATH}/index.ts`, indexTemplate({ icons: existingIcons }));

// 4.1 Get icon template.
const iconTemplateContent = fs.readFileSync(ICON_TEMPLATE_PATH, { encoding: 'utf-8' });
const iconTemplate = Handlebars.compile(iconTemplateContent);

// 4.2 Build React icons.
for (const icon of existingIcons) {
  fs.writeFileSync(`${EXPORT_PATH}/${icon.componentName}.tsx`, iconTemplate(icon));
}
