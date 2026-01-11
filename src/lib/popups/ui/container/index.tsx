import { useRef, type MouseEventHandler } from 'react';
import { motion, type Variants } from 'motion/react';
import { usePopupEngineProvider } from '../../context/hooks';
import styles from './popups-container.module.scss';
import type { TPEWrapper } from '@lib/popups/types';

const modalVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const PopupEngineContainer: TPEWrapper = ({
  children,
}) => {
  const parentRef = useRef<HTMLDivElement>(null);

  const { closePopup } = usePopupEngineProvider();

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
