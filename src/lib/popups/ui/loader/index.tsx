import type { FCClass } from '~/src/utilities/types';
import styles from './popups-loader.module.scss';

export const PopupEngineLoader: FCClass = ({
  className,
}) => {
  return (
    <div
      className={className ?? styles.parent}
    >
      Loading...
    </div>
  );
};
