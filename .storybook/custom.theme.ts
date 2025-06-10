import { create } from 'storybook/theming/create';
import pkg from '../package.json';
import logo from './assets/Storybook_logo.png';
import '@fontsource/noto-sans-display/latin-400.css';
import '@fontsource/noto-sans-display/latin-500.css';
import '@fontsource/noto-sans-display/latin-600.css';

export const theme = create({
  base: 'light',
  fontBase: '"Noto Sans Display", sans-serif',

  brandTitle: `
    <img src="${logo}" alt="UI-Kit" >
    <div style="color: #08a3b0; text-align: center">${pkg.version}</div>
  `,
  brandTarget: '_self',

  // UI
  colorPrimary: '#0f69af',
  colorSecondary: '#08a3b0',

  appBg: '#f1f7fd',
  appContentBg: '#f9fbfc',
  appBorderColor: '#edeeef',
  barBg: '#f1f7fd',
  barHoverColor: '#08a3b0',

  // Text colors
  textColor: '#0f192e',
  textMutedColor: '#0f69af',
  textInverseColor: '#ecf5fc',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#c7c7d1',
  inputTextColor: '#0f192e',
  buttonBg: '#ececf4',
  buttonBorder: '#c7c7d1'
});
