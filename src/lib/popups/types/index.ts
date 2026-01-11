import type { FC } from '~/src/utilities/types';

export type TPopupExecute = {
  variant: string;
  popupProps?: Record<string, any>;
  isCloseAll?: boolean;
};

export type TPopupExecuteItem = TPopupExecute & {
  id: number;
};

export type TPopupContext = {
  popups: TPopupsProvider['popups'];
  popupList: TPopupExecuteItem[];
  openPopup: (data: TPopupExecute) => void;
  closePopup: () => void;
  closeFirstPopup: () => void;
  closeAllPopups: () => void;
};

export type TPopupsProvider = {
  popups: Record<string, FC<any>>;
};

export type TPopupsEngineFC<K = object> = FC<{
  closePopup: () => void;
} & K>;
