import { createContext } from 'react';
import type { TPEContext, TPEPopupsContext, TPEStateContext } from '../types';

export const popupEngineContext = createContext<TPEContext>({
  openPopup: () => {},
  closePopup: () => {},
  closeFirstPopup: () => {},
  closeAllPopups: () => {},
});

export const popupEngineStateContext = createContext<TPEStateContext>({
  popupList: [],
});

export const popupEngineComponentsContext = createContext<TPEPopupsContext>({
  popups: {},
});
