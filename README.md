# Popups-engine

Движок для управления попапами в React с поддержкой кастомных компонентов и анимаций через motion.
Версия motion "^12.24.7"

## Установка

```bash
npm install your-popups-engine
```

## Основные компоненты

### PopupsEngineProvider

Провайдер для регистрации и управления попапами.

```tsx
<PopupsEngineProvider
  popups={popups}
>
  {children}

  <PopupsEngineRoot
    id="popups-root"
    lockBodyScroll={() => document.body.style.overflow = 'hidden'}
    enableBodyScroll={() => document.body.style.overflow = ''}
  />
</PopupsEngineProvider>
```

### PopupsEngineRoot

Компонент, который рендерит все попапы и обертки. Обычно располагается один раз в корне приложения.

```tsx
<PopupsEngineRoot
  id="popups-root"
  lockBodyScroll={() => document.body.style.overflow = 'hidden'}
  enableBodyScroll={() => document.body.style.overflow = ''}
/>
```

| Проп               | Тип          | Описание                                     |
| ------------------ | ------------ | -------------------------------------------- |
| `id`               | `string`     | Атрибут `id` для корневого элемента попапов. |
| `lockBodyScroll`   | `() => void` | Функция блокировки скролла страницы.         |
| `enableBodyScroll` | `() => void` | Функция разблокировки скролла страницы.      |

`PopupsEngineProvider` должен оборачивать приложение, а `PopupsEngineRoot` должен быть отрендерен внутри него (обычно один раз).

### Хук usePopupsEngineProvider

Позволяет управлять попапами внутри компонентов.

```ts
const { openPopup, closePopup, closeFirstPopup, closeAllPopups } = usePopupsEngineProvider();

// открыть попап
openPopup({ variant: 'MyPopup', popupProps: { title: 'Hello' } });

// закрыть последний попап
closePopup();

// закрыть первый попап
closeFirstPopup();

// закрыть все попапы
closeAllPopups();
```

#### Пропсы openPopup

| Проп             | Тип                   | Описание                                                  |
| ---------------- | --------------------- | --------------------------------------------------------- |
| `variant`        | `string`              | Ключ попапа из провайдера.                                |
| `popupProps`     | `Record<string, any>` | Пропсы, которые передаются в попап.                       |
| `isCloseAll`     | `boolean`             | Закрывать ли все попапы при вызове `close` внутри попапа. |
| `components`     | `TPEComponents`       | Кастомные компоненты для библиотеки.                      |
| `classNames`     | `TPEClassNames`       | Кастомные классы для компонентов библиотеки.              |
| `motionVariants` | `TPEMotionVariants`   | Анимации для `motion` обертки попапа.                     |


## Кастомизация компонентов

### Компоненты

Можно передавать кастомные компоненты для обертки и лоудера:

```tsx
const components = {
  wrapper: CustomWrapper,
  loader: CustomLoader,
};
```

### Классы

Можно передавать кастомные классы для обертки и лоудера:

```tsx
const classNames = {
  wrapper: 'my-wrapper-class',
  loader: 'my-loader-class',
};
```


## Анимации через motion (motion/react, framer-motion)

В каждый попап можно кинуть объект с анимацией motion

```tsx
const motionVariants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

openPopup({ variant: 'MyPopup', motionVariants });
```

## Дженерики

TPEComponentWrapper — дженерик для типизации попапов. Библиотека автоматически передает в попап служебные пропсы (например `closePopup`), которые можно использовать внутри компонента.


## Минимальный рабочий пример

```tsx
// '@/popup-templates/message'
export const PopupMessage: TPEComponentWrapper<TPopupMessage> = ({
  title,
  description,
  closePopup,
}) => {
  return (
    <div>
      <div>
        {title}
      </div>

      <div>
        {description}
      </div>

      <button
        type="button"
        onClick={closePopup}
      >
        close
      </button>
    </div>
  );
};

// '@/popup-templates'
const popups = {
  message: lazy(
    () => import('@views/popup-templates/message'),
  ),
};

// '@/show-popup'
export const ShowPopup = () => {
  const { openPopup } = usePopupsEngineProvider();

  const handleButtonClick = () => {
    openPopup({
      variant: 'message',
      popupProps: {
        title: `I am popup`,
        description: 'Destroyer of the worlds',
      },
    });
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleButtonClick}
      >
        Press
      </button>
    </div>
  );
};

// 'app.tsx'
<PopupsEngineProvider
  popups={popups}
>
  <ShowPopup />

  <PopupsEngineRoot />
</PopupsEngineProvider>
```
