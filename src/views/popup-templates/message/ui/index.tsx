import { ShowPopup } from '@views/show-popup';
import type { TPopupMessage } from '../types';
import styles from './popup-message.module.scss';
import type { TPEComponentWrapper } from '@lib/popups/types';

export const PopupMessage: TPEComponentWrapper<TPopupMessage> = ({
  title,
  description,
  closePopup,
}) => {
  return (
    <div
      className={styles.parent}
    >
      <button
        className={styles.buttonClose}
        type="button"
        onClick={closePopup}
      >
        close
      </button>

      <div
        className={styles.text}
      >
        {title && (
          <div
            className={styles.title}
          >
            {title}
          </div>
        )}

        {description && (
          <div
            className={styles.description}
          >
            {description}
          </div>
        )}
      </div>

      <ShowPopup />
    </div>
  );
};
