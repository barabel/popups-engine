import type { FCChildren } from '~/src/utilities/types';

export type TPEWrapper = FCChildren;

type TPEComponents = {
  wrapper?: FCChildren;
  loader?: FCChildren;
};

export type TPEExecute = {
  variant: string;
  popupProps?: Record<string, any>;
  isCloseAll?: boolean;
  components?: TPEComponents;
};

export type TPEItem = TPEExecute & {
  popupID: number;
};

export type TPEContext = {
  openPopup: (data: TPEExecute) => void;
  closePopup: () => void;
  closeFirstPopup: () => void;
  closeAllPopups: () => void;
};

export type TPEStateContext = {
  popupList: TPEItem[];
};

export type TPEPopupsContext = {
  popups: TPEProvider['popups'];
};

export type TPEProvider = {
  popups: Record<string, FCChildren<any>>;
};

export type TPEComponentWrapper<K = object> = FCChildren<{
  closePopup: () => void;
} & K>;

export type TPERoot = {
  id?: string;
};
