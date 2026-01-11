import { useContext } from 'react';
import { popupsEngineContext, popupsEngineStateContext, popupsEngineComponentsContext } from './context';

export const usePopupsEngineProvider = () => {
  return useContext(popupsEngineContext);
};

export const usePopupsEngineStateProvider = () => {
  return useContext(popupsEngineStateContext);
};

export const usePopupsEngineComponentsProvider = () => {
  return useContext(popupsEngineComponentsContext);
};
