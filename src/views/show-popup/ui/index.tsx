import { usePopupProvider } from '@lib/popups/context/provider';

export const ShowPopup = () => {
  const { openPopup } = usePopupProvider();

  const handleButtonClick = () => {
    openPopup({
      variant: 'message',
      popupProps: {
        title: 'I am popup',
        description: 'Destroyer of the worlds',
      },
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
