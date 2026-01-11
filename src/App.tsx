import { ShowPopup } from '@views/show-popup';
import { popups } from '@views/popup-templates';
import { PopupProvider } from '@lib/popups/context/provider';
import { Popups } from '@lib/popups';
import styles from './app.module.scss';

function App() {
  return (
    <main
      className={styles.main}
    >
      <PopupProvider
        popups={popups}
      >
        <ShowPopup />

        <Popups />
      </PopupProvider>
    </main>
  );
}

export default App;
