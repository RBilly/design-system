/**
 * Do not edit directly
 * Generated on Thu, 13 Jun 2024 01:06:17 GMT
 */

export const designTokens = {
  color: {
    text: {
      primary: '#0f192e',
      secondary: '#454554',
      tertiary: '#a9a9ba',
      onAccent: '#ffffff',
      link: {
        default: '#0f69af',
        pressed: '#0a3b61',
        hovered: '#085897'
      },
      onDanger: '#750c24',
      onWarning: '#3d2e0a',
      onSuccess: '#00540c'
    },
    background: {
      default: '#ffffff',
      hovered: '#ececf4',
      container: '#f8f8fc',
      pressed: '#e1e1ea',
      brand: '#0f69af',
      brandHover: '#085897',
      selected: '#ecf5fc',
      danger: '#ffdadc',
      warning: '#fff3d9',
      success: '#e6f5e8',
      containerDarker: '#ececf4',
      brandPressed: '#0a3b61',
      overlay: '#0f192e',
      sunken: '#e1e1ea'
    },
    accent: {
      primary: '#0f69af',
      secondary: '#08a3b0',
      danger: '#e61e50',
      warning: '#ffc832',
      success: '#009916',
      purple: '#8a68d2',
      magenta: '#eb3c96'
    },
    icon: {
      primary: '#454554',
      decorative: '#08a3b0',
      disabled: '#a9a9ba',
      onAccent: '#ffffff',
      brand: '#0f69af'
    },
    border: {
      default: '#c7c7d1',
      hover: '#454554',
      selected: '#0f69af',
      light: '#ececf4',
      active: '#08a3b0',
      disabled: '#ececf4',
      onAccent: '#ffffff',
      focused: '#ffc832'
    },
    neutral: {
      '10': '#f8f8fc',
      '50': '#ececf4',
      '100': '#e1e1ea',
      '200': '#c7c7d1',
      '300': '#a9a9ba',
      '700': '#454554',
      '900': '#0f192e'
    },
    blue: {
      '50': '#ecf5fc',
      '600': '#0f69af',
      '700': '#085897',
      '800': '#0a3b61'
    },
    cyan: {
      '500': '#08a3b0'
    },
    red: {
      '100': '#ffdadc',
      '600': '#e61e50',
      '800': '#750c24'
    },
    yellow: {
      '50': '#fff3d9',
      '200': '#ffc832',
      '800': '#3d2e0a'
    },
    green: {
      '50': '#e6f5e8',
      '500': '#009916',
      '800': '#00540c'
    },
    purple: {
      '500': '#8a68d2'
    },
    magenta: {
      '500': '#eb3c96'
    },
    white: '#ffffff'
  },
  spacing: {
    m200: '1rem',
    xs050: '0.25rem',
    s100: '0.5rem',
    s150: '0.75rem',
    l300: '1.5rem',
    l400: '2rem',
    xl600: '3rem',
    xl800: '4rem',
    xl1200: '6rem',
    xs025: '0.125rem'
  },
  radius: {
    default: '4px',
    modal: '8px',
    full: '999px'
  },
  border: {
    default: '1px',
    large: '2px'
  },
  opacity: {
    disabled: 0.4,
    overlay: 0.25
  },
  shadow: {
    raised: '0px 1px 2px 0px #0f1a2e26',
    overflow: '0px 4px 4px 0px #00000040',
    overlay: '0px 16px 32px 0px #0f1a2e26',
    sunken: '0px 1px 2px 0px #0f1a2e26 inset'
  },
  typography: {
    heading: {
      h1: '500 2rem/2.5rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      h2: '500 1.5rem/2rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      h3: '500 1.125rem/1.5rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      h4: '600 1rem/1.5rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      h5: '600 0.875rem/1.25rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      h6: '600 0.75rem/1rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif'
    },
    body: {
      medium:
        '400 1rem/1.5rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      small:
        '400 0.875rem/1.25rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      xs: '400 0.75rem/1rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif'
    },
    label: {
      xl: '500 1.125rem/1.5rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      large:
        '600 1rem/1.5rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      medium:
        '500 0.875rem/1.25rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif',
      small:
        '500 0.75rem/1rem "Noto Sans Display", "Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif'
    }
  }
} as const;
