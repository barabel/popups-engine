import {
  useMemo,
  useState,
} from 'react';
import type { TPEExecute, TPEProvider, TPEItem } from '../types';
import { popupEngineContext, popupEngineComponentsContext, popupEngineStateContext } from './context';
import type { FCChildren } from '~/src/utilities/types';

export const PopupEngineProvider: FCChildren<TPEProvider> = ({
  popups,
  children,
}) => {
  const [popupList, setPopupList] = useState<TPEItem[]>([]);

  const openPopup = (data: TPEExecute): void => {
    setPopupList((popupList) => {
      return [...popupList, {
        ...data,
        popupID: Date.now(),
      }];
    });
  };

  const closePopup = (): void => {
    setPopupList((popupList) => {
      return popupList.slice(0, -1);
    });
  };

  const closeFirstPopup = (): void => {
    setPopupList((popupList) => {
      return popupList.slice(1);
    });
  };

  const closeAllPopups = (): void => {
    setPopupList(() => {
      return [];
    });
  };

  const value = useMemo(() => {
    return {
      openPopup,
      closePopup,
      closeFirstPopup,
      closeAllPopups,
    };
  }, []);

  const state = useMemo(() => ({
    popupList,
  }), [popupList]);

  const components = useMemo(() => {
    return {
      popups,
    };
  }, [popups]);

  return (
    <popupEngineContext.Provider value={value}>
      <popupEngineStateContext.Provider value={state}>
        <popupEngineComponentsContext.Provider value={components}>
          {children}
        </popupEngineComponentsContext.Provider>
      </popupEngineStateContext.Provider>
    </popupEngineContext.Provider>
  );
};
