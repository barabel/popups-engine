import { useEffect } from 'react';
import type { TPopups } from '../types';
import { usePopupProvider, usePopupStateProvider } from '../context/provider';
import { PopupsContainer } from './container';
import { AnimatePresence } from 'motion/react';

export const Popups: React.FC<React.PropsWithChildren & TPopups> = ({
  popups = {},
}) => {
  const { popupList } = usePopupStateProvider();

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
            <PopupsContainer
              key={id}
            >
              {LazyPopup && (
                <LazyPopup
                  {...popupProps}
                />
              )}
            </PopupsContainer>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
