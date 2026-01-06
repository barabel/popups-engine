import { useContext } from 'react';
import { popupContext, popupStateContext, popupsComponentsContext } from './context';

export const usePopupProvider = () => {
  return useContext(popupContext);
};

export const usePopupStateProvider = () => {
  return useContext(popupStateContext);
};

export const usePopupsComponentsProvider = () => {
  return useContext(popupsComponentsContext);
};
