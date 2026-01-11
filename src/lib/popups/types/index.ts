import type { Variant } from 'motion/react';
import type { FCClass } from '~/src/utilities/types';

/**
 * Варианты анимации обертки для motion
 */
type TPEMotionVariants = {
  /** Начальное положение обертки */
  initial: Variant;
  /** Активное положение обертки */
  animate: Variant;
  /** Анимация ухода обертки */
  exit: Variant;
};

/**
 * Компонент обертки
 */
export type TPEWrapper = FCClass<{
  /**
   * Варианты анимации обертки для motion
   */
  motionVariants?: TPEMotionVariants;
}>;

type TPEMapComponents = {
  /** обертка, в которую ставится попап */
  wrapper: {
    /** компонент обертки */
    component: TPEWrapper;
    /** класс обертки */
    className: string;
  };
  /** лоудер, который отображается, когда лези попап грузится (Suspense fallback) */
  loader: {
    /** компонент лоудера */
    component: FCClass;
    /** класс лоудера */
    className: string;
  };
};

type TPEComponents = {
  [K in keyof TPEMapComponents]?: TPEMapComponents[K]['component'];
};

type TPEClassNames = {
  [K in keyof TPEMapComponents]?: TPEMapComponents[K]['className'];
};

/**
 * пропсы openPopup
 */
export type TPEExecute = {
  /** вариант попапа (берется из ключей объекта, переданного в провайдер) */
  variant: string;
  /** пропсы попапа, который хотят вызывать */
  popupProps?: Record<string, any>;
  /** закрыть ли все попапы, если вызвать пропс close, переданный в попап */
  isCloseAll?: boolean;
  /** кастомные компоненты либы */
  components?: TPEComponents;
  /** кастомные классы для компонентов либы */
  classNames?: TPEClassNames;
  /** Варианты анимации обертки для motion */
  motionVariants?: TPEMotionVariants;
};

export type TPEItem = TPEExecute & {
  /** айди попапа */
  popupID: number;
};

/** Контекст методов */
export type TPEContext = {
  /** Открыть попап */
  openPopup: (data: TPEExecute) => void;
  /** Закрыть последний попап */
  closePopup: () => void;
  /** Закрыть первый попап */
  closeFirstPopup: () => void;
  /** Закрыть все попапы */
  closeAllPopups: () => void;
};

/** Контекст открытых попапов */
export type TPEStateContext = {
  /** массив объектов для открытых попапов */
  popupList: TPEItem[];
};

/** контекст попапов */
export type TPEPopupsContext = {
/** частные попапы */
  popups: TPEProvider['popups'];
};

/** провайдер для открытия попаов */
export type TPEProvider = {
  /** частные попапы */
  popups: Record<string, FCClass<any>>;
};

/** Дженерик для частного попапа. Либа передает некоторые методы пропсом в попап, который прокидывают в провайдер */
export type TPEComponentWrapper<K = object> = FCClass<{
  /** Закрыть последний попап */
  closePopup: () => void;
} & K>;

/** Рут для попапов */
export type TPERoot = {
  /** аттрибут id рута */
  id?: string;
  /** Каллбак для вызова разрешающего метода скролл лока */
  enableBodyScroll?: () => void;
  /** Каллбак для вызова запрещающего метода скролл лока */
  lockBodyScroll?: () => void;
};
