
import { style } from '@vanilla-extract/css';

export const styles = {
  parent: style({
    padding: '24px 16px',
    backgroundColor: 'beige'
  }),
  text: style({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  }),
  title: style({
    fontSize: '24px',
    textAlign: 'center',
  }),
  description: style({
    fontSize: '14px',
    textAlign: 'center',
  }),
}
