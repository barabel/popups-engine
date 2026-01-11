import { Suspense, useEffect } from 'react';
import { usePopupEngineProvider, usePopupEngineComponentsProvider, usePopupEngineStateProvider } from '../context/hooks';
import { PopupEngineContainer } from './container';
import { AnimatePresence } from 'motion/react';
import type { FCChildren } from '~/src/utilities/types';
import { PopupEngineLoader } from './loader';
import type { TPERoot } from '../types';

export const PopupEngineRoot: FCChildren<TPERoot> = ({
  id = 'popups-engine-root',
}) => {
  const { popupList } = usePopupEngineStateProvider();

  const { popups } = usePopupEngineComponentsProvider();

  const { closePopup, closeAllPopups } = usePopupEngineProvider();

  // const { enable, lock } = useScrollLock();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        const currentPopupExecuteProps = popupList.at(-1);

        const close = currentPopupExecuteProps?.isCloseAll ? closeAllPopups : closePopup;

        close();
      }
    };

    if (popupList.length > 0) {
      // lock();
      window.addEventListener('keydown', closeOnEscape);
    }

    return () => {
      if (popupList.length > 0) {
        // enable();
      }

      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [popupList, closePopup, closeAllPopups]);

  return (
    <div id={id}>
      <AnimatePresence>
        {popupList.map((popupExecuteProps) => {
          const {
            popupID,
            variant,
            popupProps,
            isCloseAll,
            components,
          } = popupExecuteProps;

          const PopupsContainer = components?.wrapper ?? PopupEngineContainer;
          const PopupsLoader = components?.loader ?? PopupEngineLoader;
          const LazyPopup = popups[variant];

          return (
            <PopupsContainer
              key={popupID}
            >
              <Suspense
                fallback={<PopupsLoader />}
              >
                {LazyPopup && (
                  <LazyPopup
                    {...popupProps}
                    closePopup={isCloseAll ? closeAllPopups : closePopup}
                  />
                )}
              </Suspense>
            </PopupsContainer>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
