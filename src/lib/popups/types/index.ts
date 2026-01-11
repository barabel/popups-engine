import type { Variant } from 'motion/react';
import type { FCClass } from '~/src/utilities/types';

type TPEMotionVariants = {
  initial: Variant;
  animate: Variant;
  exit: Variant;
};

export type TPEWrapper = FCClass<{ motionVariants?: TPEMotionVariants }>;

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
  motionVariants?: TPEMotionVariants;
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
  enable?: () => void;
  lock?: () => void;
};
