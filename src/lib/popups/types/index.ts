export type TPopupExecute = {
  variant: string;
  popupProps?: Record<string, unknown>;
};

export type TPopupContext = {
  popupList: Array<TPopupExecute & { id: number }>;
  openPopup: (data: TPopupExecute) => void;
  closePopup: () => void;
  closeFirstPopup: () => void;
  closeAllPopups: () => void;
};

export type TPopups = {
  popups?: Record<string, React.FC<any>>;
};
