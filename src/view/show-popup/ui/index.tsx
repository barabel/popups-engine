import { usePopupProvider } from "../../popups/context/provider"

export const ShowPopup = () => {
  const { openPopup } = usePopupProvider();

  const handleButtonClick = () => {
    openPopup({
      variant: 'a',
    })
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleButtonClick}
      >
        Press
      </button>
    </div>
  )
}
