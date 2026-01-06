export type TPopupComponent = {
  variant: string
  popupProps?: Record<string, unknown>
}

export type TPopupsRef = { id: number, closeThisPopup: () => void };

export type TPopupContext = {
  popupList: Array<TPopupComponent & { id: number }>
  openPopup: (data: TPopupComponent) => void
  closePopup: () => void
  closeFirstPopup: () => void
  closeAllPopups: () => void
};
