import { recipe } from '@vanilla-extract/recipes';

export const toastRegion = recipe({
  base: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
  },
  variants: {
    position: {
      topLeft: {
        top: '16px',
        left: '16px'
      },
      topRight: {
        top: '16px',
        right: '16px'
      },
      bottomLeft: {
        bottom: '16px',
        left: '16px'
      },
      bottomRight: {
        bottom: '16px',
        right: '16px'
      }
    }
  }
});
