import { layer, style } from '@vanilla-extract/css';

/**
 * This file has been inspired by destyle.css https://github.com/nicolas-cusan/destyle.css/
 */
const reset = layer();

const root = style({
  '@layer': {
    [reset]: {
      boxSizing: 'border-box',
      borderStyle: 'solid',
      borderWidth: 0,
      selectors: {
        '&::before, &::after': {
          boxSizing: 'border-box',
          borderStyle: 'solid',
          borderWidth: 0
        }
      }
    }
  }
});

const main = style([
  root,
  {
    '@layer': {
      [reset]: {
        display: 'block'
      }
    }
  }
]);

const zeroMargin = style([
  root,
  {
    '@layer': {
      [reset]: {
        margin: 0
      }
    }
  }
]);

const p = style([zeroMargin]);

const table = style([
  zeroMargin,
  {
    '@layer': {
      [reset]: {
        borderColor: 'inherit',
        borderCollapse: 'collapse'
      }
    }
  }
]);

const blockquote = style([zeroMargin]);

const form = style([zeroMargin]);

const figure = style([zeroMargin]);

const dl = style([zeroMargin]);

const header = style([
  zeroMargin,
  {
    '@layer': {
      [reset]: {
        fontSize: 'inherit',
        fontWeight: 'inherit'
      }
    }
  }
]);

const list = style([
  zeroMargin,
  {
    '@layer': {
      [reset]: {
        padding: 0,
        listStyle: 'none'
      }
    }
  }
]);

const dt = style([
  root,
  {
    '@layer': {
      [reset]: {
        fontWeight: 700
      }
    }
  }
]);

const dd = style([
  root,
  {
    '@layer': {
      [reset]: {
        marginLeft: 0
      }
    }
  }
]);

const hr = style([
  zeroMargin,
  {
    '@layer': {
      [reset]: {
        boxSizing: 'content-box',
        height: 0,
        overflow: 'visible',
        borderTopWidth: 1,
        clear: 'both',
        color: 'inherit'
      }
    }
  }
]);

const pre = style([
  zeroMargin,
  {
    '@layer': {
      [reset]: {
        fontFamily: 'sans-serif',
        fontSize: 'inherit'
      }
    }
  }
]);

const address = style([
  zeroMargin,
  {
    '@layer': {
      [reset]: {
        fontStyle: 'inherit'
      }
    }
  }
]);

const a = style([
  root,
  {
    '@layer': {
      [reset]: {
        backgroundColor: 'transparent',
        textDecoration: 'none',
        color: 'inherit'
      }
    }
  }
]);

const abbr = style([
  root,
  {
    '@layer': {
      [reset]: {
        selectors: {
          '&[title]': {
            textDecoration: 'underline dotted'
          }
        }
      }
    }
  }
]);

const strong = style([
  root,
  {
    '@layer': {
      [reset]: {
        fontWeight: 'bolder'
      }
    }
  }
]);

const code = style([
  root,
  {
    '@layer': {
      [reset]: {
        fontFamily: 'monospace',
        fontSize: 'inherit'
      }
    }
  }
]);

const small = style([
  root,
  {
    '@layer': {
      [reset]: {
        fontSize: '80%'
      }
    }
  }
]);

const sub = style([
  root,
  {
    '@layer': {
      [reset]: {
        bottom: '-0.25em'
      }
    }
  }
]);

const sup = style([
  root,
  {
    '@layer': {
      [reset]: {
        top: '-0.5em'
      }
    }
  }
]);

const baseImg = style([
  root,
  {
    '@layer': {
      [reset]: {
        fontFamily: 'monospace',
        fontSize: 'inherit'
      }
    }
  }
]);

const img = style([baseImg]);

const svg = style([baseImg]);

const object = style([baseImg]);

const embed = style([baseImg]);

const iframe = style([zeroMargin, baseImg]);

const baseInput = style([
  root,
  {
    '@layer': {
      [reset]: {
        appearance: 'none',
        verticalAlign: 'middle',
        color: 'inherit',
        font: 'inherit',
        background: 'transparent',
        padding: 0,
        margin: 0,
        borderRadius: 0,
        textAlign: 'inherit',
        textTransform: 'inherit'
      }
    }
  }
]);

const input = style([baseInput]);

const optgroup = style([baseInput]);

const textarea = style([
  baseInput,
  {
    '@layer': {
      [reset]: {
        overflow: 'auto'
      }
    }
  }
]);

const select = style([
  baseInput,
  {
    '@layer': {
      [reset]: {
        selectors: {
          '&:disabled': {
            opacity: 'inherit'
          }
        }
      }
    }
  }
]);

const button = style([
  baseInput,
  {
    '@layer': {
      [reset]: {
        cursor: 'pointer',
        selectors: {
          '&:disabled': {
            cursor: 'default'
          }
        }
      }
    }
  }
]);

const fieldset = style([
  root,
  {
    '@layer': {
      [reset]: {
        margin: 0,
        padding: 0,
        minWidth: 0
      }
    }
  }
]);

const legend = style([
  root,
  {
    '@layer': {
      [reset]: {
        padding: 0
      }
    }
  }
]);

const progress = style([
  root,
  {
    '@layer': {
      [reset]: {
        verticalAlign: 'baseline'
      }
    }
  }
]);

const label = style([
  root,
  {
    '@layer': {
      [reset]: {
        selectors: {
          '&[for]': {
            cursor: 'pointer'
          }
        }
      }
    }
  }
]);

const details = style([
  root,
  {
    '@layer': {
      [reset]: {
        display: 'block'
      }
    }
  }
]);

const summary = style([
  root,
  {
    '@layer': {
      [reset]: {
        display: 'list-item'
      }
    }
  }
]);

const caption = style([
  root,
  {
    '@layer': {
      [reset]: {
        textAlign: 'left'
      }
    }
  }
]);

const td = style([
  root,
  {
    '@layer': {
      [reset]: {
        verticalAlign: 'top',
        padding: 0
      }
    }
  }
]);

const th = style([
  root,
  {
    '@layer': {
      [reset]: {
        verticalAlign: 'top',
        padding: 0,
        textAlign: 'left',
        fontWeight: 700
      }
    }
  }
]);

export {
  root,
  main,
  p,
  table,
  blockquote,
  iframe,
  form,
  figure,
  dl,
  header,
  list,
  dt,
  dd,
  hr,
  pre,
  address,
  a,
  abbr,
  strong,
  code,
  small,
  sub,
  sup,
  img,
  svg,
  embed,
  object,
  input,
  optgroup,
  select,
  textarea,
  button,
  fieldset,
  legend,
  progress,
  label,
  details,
  summary,
  caption,
  td,
  th
};
