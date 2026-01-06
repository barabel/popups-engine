import { style } from '@vanilla-extract/css';

export const styles = {
  parent: style({
    zIndex: 100,
    position: 'fixed',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100vh',
    backgroundColor: '#00000080',
  }),
  wrapper: style({
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    height: 'auto',
    background: 'transparent',
  }),
};
