import { Suspense, useEffect } from 'react';
import { usePopupsEngineProvider, usePopupsEngineComponentsProvider, usePopupsEngineStateProvider } from '../context/hooks';
import { PopupsEngineContainer } from './container';
import { AnimatePresence } from 'motion/react';
import type { FCClass } from '~/src/utilities/types';
import { PopupsEngineLoader } from './loader';
import type { TPERoot } from '../types';

export const PopupsEngineRoot: FCClass<TPERoot> = ({
  className,
  id = 'popups-engine-root',
  enableBodyScroll,
  lockBodyScroll,
}) => {
  const { popupList } = usePopupsEngineStateProvider();

  const { popups } = usePopupsEngineComponentsProvider();

  const { closePopup, closeAllPopups } = usePopupsEngineProvider();

  useEffect(() => {
    if (popupList.length > 0) {
      lockBodyScroll?.();
    }

    return () => {
      if (popupList.length > 0) {
        enableBodyScroll?.();
      }
    };
  }, [
    popupList,
    enableBodyScroll,
    lockBodyScroll,
  ]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        const currentPopupExecuteProps = popupList.at(-1);

        const close = currentPopupExecuteProps?.isCloseAll ? closeAllPopups : closePopup;

        close();
      }
    };

    if (popupList.length > 0) {
      window.addEventListener('keydown', closeOnEscape);
    }

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [
    popupList,
    closePopup,
    closeAllPopups,
  ]);

  return (
    <div
      className={className}
      id={id}
    >
      <AnimatePresence>
        {popupList.map((popupExecuteProps) => {
          const {
            popupID,
            variant,
            popupProps,
            isCloseAll,
            components,
            classNames,
            motionVariants,
          } = popupExecuteProps;

          const PopupsContainer = components?.wrapper ?? PopupsEngineContainer;
          const PopupsLoader = components?.loader ?? PopupsEngineLoader;
          const LazyPopup = popups[variant];

          if (!LazyPopup) {
            return null;
          }

          return (
            <PopupsContainer
              key={popupID}
              className={classNames?.wrapper}
              motionVariants={motionVariants}
            >
              <Suspense
                fallback={<PopupsLoader className={classNames?.loader} />}
              >
                <LazyPopup
                  {...popupProps}
                  closePopup={isCloseAll ? closeAllPopups : closePopup}
                />
              </Suspense>
            </PopupsContainer>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
