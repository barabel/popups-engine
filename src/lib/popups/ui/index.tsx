import { Suspense, useEffect } from 'react';
import { usePopupProvider, usePopupsComponentsProvider, usePopupStateProvider } from '../context/hooks';
import { PopupsContainer } from './container';
import { AnimatePresence } from 'motion/react';
import type { FC } from '~/src/utilities/types';

export const Popups: FC = () => {
  const { popupList } = usePopupStateProvider();

  const { popups } = usePopupsComponentsProvider();

  const { closePopup } = usePopupProvider();

  // const { enable, lock } = useScrollLock();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        closePopup();
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
  }, [popupList, closePopup]);

  return (
    <div id="popups-engine">
      <AnimatePresence>
        {popupList.map((popupList) => {
          const {
            id,
            variant,
            popupProps,
          } = popupList;

          const LazyPopup = popups[variant];

          return (
            <Suspense>
              <PopupsContainer
                key={id}
              >
                {LazyPopup && (
                  <LazyPopup
                    {...popupProps}
                  />
                )}
              </PopupsContainer>
            </Suspense>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
