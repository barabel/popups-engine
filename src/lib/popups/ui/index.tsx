import { Suspense, useEffect } from 'react';
import { usePopupProvider, usePopupsComponentsProvider, usePopupStateProvider } from '../context/hooks';
import { PopupsContainer } from './container';
import { AnimatePresence } from 'motion/react';
import type { FC } from '~/src/utilities/types';
import { PopupsLoader } from './loader';

export const Popups: FC = () => {
  const { popupList } = usePopupStateProvider();

  const { popups } = usePopupsComponentsProvider();

  const { closePopup, closeAllPopups } = usePopupProvider();

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
    <div id="popups-engine">
      <AnimatePresence>
        {popupList.map((popupExecuteProps) => {
          const {
            id,
            variant,
            popupProps,
            isCloseAll,
          } = popupExecuteProps;

          const LazyPopup = popups[variant];

          return (
            <PopupsContainer
              key={id}
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
