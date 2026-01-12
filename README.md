# Popups-engine

Движок для управления попапами в React с поддержкой кастомных компонентов и анимаций через `motion`.

Версия `motion`: **^12.24.7**

## Установка

```bash
npm i @barabel324/popups-engine
```

## Основные компоненты

### PopupsEngineProvider

Провайдер для регистрации и управления попапами.

```tsx
<PopupsEngineProvider popups={popups}>
  {children}

  <PopupsEngineRoot
    id="popups-root"
    lockBodyScroll={() => (document.body.style.overflow = 'hidden')}
    enableBodyScroll={() => (document.body.style.overflow = '')}
  />
</PopupsEngineProvider>
```

### PopupsEngineRoot

Компонент, который рендерит все попапы и обёртки. Обычно используется один раз в корне приложения.

```tsx
<PopupsEngineRoot
  id="popups-root"
  lockBodyScroll={() => (document.body.style.overflow = 'hidden')}
  enableBodyScroll={() => (document.body.style.overflow = '')}
/>
```

#### Пропсы

| Проп               | Тип                 | Описание                                                           |
| ------------------ | ------------------- | ------------------------------------------------------------------ |
| `id`               | `string`            | `id` атрибут для корневого элемента попапов                        |
| `lockBodyScroll`   | `() => void`        | Функция блокировки скролла страницы                                |
| `enableBodyScroll` | `() => void`        | Функция разблокировки скролла страницы                             |
| `components`       | `TPEComponents`     | Кастомные компоненты. `openPopup` имеет приоритет над этим пропсом |
| `classNames`       | `TPEClassNames`     | Кастомные классы. `openPopup` имеет приоритет над этим пропсом     |
| `motionVariants`   | `TPEMotionVariants` | Анимации для `motion`-обёртки попапа. `openPopup` имеет приоритет  |

`PopupsEngineProvider` должен оборачивать приложение, а `PopupsEngineRoot` должен быть отрендерен внутри него.

## Хук usePopupsEngineProvider

Позволяет управлять попапами внутри компонентов.

```ts
const {
  openPopup,
  closePopup,
  closeFirstPopup,
  closeAllPopups,
} = usePopupsEngineProvider();

openPopup({ variant: 'MyPopup', popupProps: { title: 'Hello' } });
closePopup();
closeFirstPopup();
closeAllPopups();
```

### Пропсы openPopup

| Проп             | Тип                   | Описание                                                               |
| ---------------- | --------------------- | ---------------------------------------------------------------------- |
| `variant`        | `string`              | Ключ попапа, зарегистрированного в провайдере                          |
| `popupProps`     | `Record<string, any>` | Пропсы, передаваемые в компонент попапа                                |
| `isCloseAll`     | `boolean`             | Закрывать ли все попапы при вызове `close` внутри попапа               |
| `components`     | `TPEComponents`       | Кастомные компоненты. Приоритет над `PopupsEngineRoot`                 |
| `classNames`     | `TPEClassNames`       | Кастомные классы. Приоритет над `PopupsEngineRoot`                     |
| `motionVariants` | `TPEMotionVariants`   | Анимации для `motion`-обёртки попапа. Приоритет над `PopupsEngineRoot` |

## Кастомизация

Кастомизация возможна глобально через `PopupsEngineRoot` или локально через `openPopup`.

Пропсы, переданные в `openPopup`, имеют приоритет над пропсами `PopupsEngineRoot`.

### Компоненты

```tsx
const components = {
  wrapper: CustomWrapper,
  loader: CustomLoader,
};
```

### Классы

```tsx
const classNames = {
  wrapper: 'my-wrapper-class',
  loader: 'my-loader-class',
};
```

## Анимации (motion / framer-motion)

```tsx
const motionVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};
```

## Дженерики

`TPEComponentWrapper` — дженерик для типизации попапов. Библиотека автоматически передаёт в компонент служебные пропсы (например, `closePopup`).

## Минимальный пример

```tsx
// '@/popup-templates/message'
export const PopupMessage: TPEComponentWrapper<TPopupMessage> = ({
  title,
  description,
  closePopup,
}) => (
  <div>
    <div>{title}</div>
    <div>{description}</div>
    <button type="button" onClick={closePopup}>
      close
    </button>
  </div>
);

// '@/popup-templates'
const popups = {
  message: lazy(() => import('@views/popup-templates/message')),
};

// '@/show-popup'
export const ShowPopup = () => {
  const { openPopup } = usePopupsEngineProvider();

  return (
    <button
      type="button"
      onClick={() =>
        openPopup({
          variant: 'message',
          popupProps: {
            title: 'I am popup',
            description: 'Destroyer of the worlds',
          },
        })
      }
    >
      Press
    </button>
  );
};

// 'app.tsx'
import { PopupsEngineProvider, PopupsEngineRoot } from '@barabel324/popups-engine';
import '@barabel324/popups-engine/css';

<PopupsEngineProvider popups={popups}>
  <ShowPopup />
  <PopupsEngineRoot />
</PopupsEngineProvider>
```
