import { createContext } from 'react';
import type { TPopupContext } from '../types';

export const popupContext = createContext<Omit<TPopupContext, 'popupList' | 'popups'>>({
  openPopup: () => {},
  closePopup: () => {},
  closeFirstPopup: () => {},
  closeAllPopups: () => {},
});

export const popupStateContext = createContext<Pick<TPopupContext, 'popupList'>>({
  popupList: [],
});

export const popupsComponentsContext = createContext<Pick<TPopupContext, 'popups'>>({
  popups: {},
});
