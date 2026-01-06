import { useEffect, useRef } from 'react';
import type { TPopupsRef } from '../types';
import { usePopupStateProvider } from '../context/provider';

export const Popups: React.FC<React.PropsWithChildren> = () => {
  const popupsRef = useRef<TPopupsRef[]>([]);

  const { popupList } = usePopupStateProvider();

  // const { enable, lock } = useScrollLock();

  useEffect(() => {
    if (popupList.length > 0) {
      // lock();
    }

    const closeOnEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        const popupListActivePopupId = popupList[popupList.length - 1].id;

        const popupActiveRef = popupsRef.current.find((popup) => popup.id === popupListActivePopupId);

        if (popupActiveRef) {
          const { closeThisPopup } = popupActiveRef;
          closeThisPopup();
        }
      }
    };

    if (popupList.length > 0) {
      window.addEventListener('keydown', closeOnEscape);
    }

    return () => {
      if (popupList.length > 0) {
        // enable();
      }

      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [popupList]);

  return (
    <div id="popups">
      {/* {popupList.map((popup, index) => { */}
      {popupList.map((popup) => {
        return (
          <div
            key={popup.id}
          >
            hello popup
          </div>
          // <PopupsContainer
          //   ref={(element) => {
          //     if (element) {
          //       popupsRef.current[index] = element;
          //     }
          //   }}
          //   key={popup.id}
          //   {...popup}
          // />
        );
      })}
    </div>
  );
};
