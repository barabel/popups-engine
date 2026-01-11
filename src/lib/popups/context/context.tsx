import { createContext } from 'react';
import type { TPEContext, TPEPopupsContext, TPEStateContext } from '../types';

export const popupsEngineContext = createContext<TPEContext>({
  openPopup: () => {},
  closePopup: () => {},
  closeFirstPopup: () => {},
  closeAllPopups: () => {},
});

export const popupsEngineStateContext = createContext<TPEStateContext>({
  popupList: [],
});

export const popupsEngineComponentsContext = createContext<TPEPopupsContext>({
  popups: {},
});
