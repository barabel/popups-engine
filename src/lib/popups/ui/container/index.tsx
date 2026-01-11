import { useRef, type MouseEventHandler } from 'react';
import { motion, type Variants } from 'motion/react';
import { usePopupProvider } from '../../context/hooks';
import styles from './popups-container.module.scss';
import type { FC } from '~/src/utilities/types';

const modalVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const PopupsContainer: FC = ({
  children,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const { closePopup } = usePopupProvider();

  const closeByOverlayClick: MouseEventHandler<HTMLDivElement> = (event) => {
    if (event.target === parentRef.current) {
      closePopup();
    }
  };

  return (
    <motion.div
      variants={modalVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={parentRef}
      className={styles.parent}
      onClick={closeByOverlayClick}
    >
      {children}
    </motion.div>
  );
};
