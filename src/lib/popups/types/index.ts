export type TPopupExecute = {
  variant: string;
  popupProps?: Record<string, any>;
};

export type TPopupExecuteItem = TPopupExecute & { id: number };

export type TPopupContext = {
  popups: TPopupsProvider['popups'];
  popupList: TPopupExecuteItem[];
  openPopup: (data: TPopupExecute) => void;
  closePopup: () => void;
  closeFirstPopup: () => void;
  closeAllPopups: () => void;
};

export type TPopupsProvider = {
  popups: Record<string, React.FC<any>>;
};
