import type { FCClass } from '~/src/utilities/types';
import styles from './popups-loader.module.scss';

export const PopupsEngineLoader: FCClass = ({
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
