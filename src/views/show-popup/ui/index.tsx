import { usePopupEngineProvider } from '@lib/popups/context/hooks';
import type { FCClass } from '~/src/utilities/types';

export const ShowPopup: FCClass<{ countStart: number }> = ({
  countStart,
}) => {
  const { openPopup } = usePopupEngineProvider();

  const popupNumber = countStart + 1;

  const handleButtonClick = () => {
    openPopup({
      variant: 'message',
      popupProps: {
        title: `I am popup #${popupNumber}`,
        description: 'Destroyer of the worlds',
        countStart: popupNumber,
      },
      motionVariants: Math.floor(Math.random() * 2)
        ? {
            initial: { translateX: '-100%', transition: { ease: 'linear' } },
            animate: { translateX: '0%', transition: { ease: 'linear' } },
            exit: { translateX: '-100%', transition: { ease: 'linear' } },
          }
        : undefined,
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleButtonClick}
      >
        Press
      </button>
    </div>
  );
};
