import { useRef, type MouseEventHandler } from 'react';
import { motion, type Variants } from 'motion/react';
import { usePopupProvider } from '../../context/provider';
import { styles } from './popups-container.css';

const modalVariants: Variants = {
  visible: { opacity: 1, transition: { when: 'beforeChildren' } },
  hidden: { opacity: 0, transition: { when: 'afterChildren' } },
};

export const PopupsContainer: React.FC<React.PropsWithChildren> = ({
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
      initial="hidden"
      animate="visible"
      exit="hidden"
      ref={parentRef}
      className={styles.parent}
      onClick={closeByOverlayClick}
    >
      {children}
    </motion.div>
  );
};
