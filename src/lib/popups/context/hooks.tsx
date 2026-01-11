import { useContext } from 'react';
import { popupEngineContext, popupEngineStateContext, popupEngineComponentsContext } from './context';

export const usePopupEngineProvider = () => {
  return useContext(popupEngineContext);
};

export const usePopupEngineStateProvider = () => {
  return useContext(popupEngineStateContext);
};

export const usePopupEngineComponentsProvider = () => {
  return useContext(popupEngineComponentsContext);
};
