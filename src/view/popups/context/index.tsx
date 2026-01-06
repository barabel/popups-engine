import {
  useMemo,
  useState,
} from 'react';
import type { TPopupExecute, TPopupContext } from '../types';
import { popupContext, popupStateContext } from './context';

export const PopupProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [popupList, setPopupList] = useState<TPopupContext['popupList']>([]);

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

  return (
    <popupContext.Provider value={value}>
      <popupStateContext.Provider value={state}>
        {children}
      </popupStateContext.Provider>
    </popupContext.Provider>
  );
};
