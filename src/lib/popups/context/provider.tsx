import {
  useMemo,
  useState,
} from 'react';
import type { TPopupExecute, TPopupsProvider, TPopupExecuteItem } from '../types';
import { popupContext, popupsComponentsContext, popupStateContext } from './context';

export const PopupProvider: React.FC<React.PropsWithChildren & TPopupsProvider> = ({
  popups,
  children,
}) => {
  const [popupList, setPopupList] = useState<TPopupExecuteItem[]>([]);

  const openPopup = (data: TPopupExecute): void => {
    setPopupList((popupList) => {
      return [...popupList, {
        ...data,
        id: Date.now(),
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
    <popupContext.Provider value={value}>
      <popupStateContext.Provider value={state}>
        <popupsComponentsContext.Provider value={components}>
          {children}
        </popupsComponentsContext.Provider>
      </popupStateContext.Provider>
    </popupContext.Provider>
  );
};
