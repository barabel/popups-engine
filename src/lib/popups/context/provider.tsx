import {
  useCallback,
  useMemo,
  useState,
} from 'react';
import type { TPEExecute, TPEProvider, TPEItem } from '../types';
import { popupsEngineContext, popupsEngineComponentsContext, popupsEngineStateContext } from './context';
import type { FCClass } from '~/src/utilities/types';

export const PopupsEngineProvider: FCClass<TPEProvider> = ({
  popups,
  children,
}) => {
  const [popupList, setPopupList] = useState<TPEItem[]>([]);

  const openPopup = useCallback((data: TPEExecute): void => {
    const popupKeys = Object.keys(popups);

    const { variant } = data;

    if (variant) {
      const isPopupVariantExist = popupKeys.some(popupKey => popupKey === variant);

      if (isPopupVariantExist) {
        setPopupList((popupList) => {
          return [...popupList, {
            ...data,
            popupID: Date.now(),
          }];
        });
      }
      else {
        console.error(`there are no "${variant}" popup`);
      }
    }
  }, [popups]);

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
  }, [openPopup]);

  const state = useMemo(() => ({
    popupList,
  }), [popupList]);

  const components = useMemo(() => {
    return {
      popups,
    };
  }, [popups]);

  return (
    <popupsEngineContext.Provider value={value}>
      <popupsEngineStateContext.Provider value={state}>
        <popupsEngineComponentsContext.Provider value={components}>
          {children}
        </popupsEngineComponentsContext.Provider>
      </popupsEngineStateContext.Provider>
    </popupsEngineContext.Provider>
  );
};
