import { useContext } from 'react';
import { popupContext, popupStateContext } from './context';

export const usePopupProvider = () => {
  return useContext(popupContext);
};

export const usePopupStateProvider = () => {
  return useContext(popupStateContext);
};
