import { createContext } from 'react';
import type { TPopupContext } from '../types';

export const popupContext = createContext<Omit<TPopupContext, 'popupList'>>({
  openPopup: () => {},
  closePopup: () => {},
  closeFirstPopup: () => {},
  closeAllPopups: () => {},
});

export const popupStateContext = createContext<Pick<TPopupContext, 'popupList'>>({
  popupList: [],
});
