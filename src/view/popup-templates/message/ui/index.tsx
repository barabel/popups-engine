import { ShowPopup } from '../../../show-popup';
import type { TPopupMessage } from '../types';
import { styles } from './popup-message.css';

export const PopupMessage: React.FC<TPopupMessage> = ({
  title,
  description,
}) => {
  return (
    <div
      className={styles.parent}
    >
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
