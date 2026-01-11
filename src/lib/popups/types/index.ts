import type { FCClass } from '~/src/utilities/types';

export type TPEWrapper = FCClass;

type TPEMapComponents = {
  wrapper: {
    component: TPEWrapper;
    className: string;
  };
  loader: {
    component: FCClass;
    className: string;
  };
};

type TPEComponents = {
  [K in keyof TPEMapComponents]?: TPEMapComponents[K]['component'];
};

type TPEClassNames = {
  [K in keyof TPEMapComponents]?: TPEMapComponents[K]['className'];
};

export type TPEExecute = {
  variant: string;
  popupProps?: Record<string, any>;
  isCloseAll?: boolean;
  components?: TPEComponents;
  classNames?: TPEClassNames;
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
  popups: Record<string, FCClass<any>>;
};

export type TPEComponentWrapper<K = object> = FCClass<{
  closePopup: () => void;
} & K>;

export type TPERoot = {
  id?: string;
};
