import { ShowPopup } from '@views/show-popup';
import { popups } from '@views/popup-templates';
import { PopupEngineProvider } from '@lib/popups/context/provider';
import { PopupEngineRoot } from '@lib/popups';
import styles from './app.module.scss';

const countStart = 0;

function App() {
  return (
    <main
      className={styles.main}
    >
      <PopupEngineProvider
        popups={popups}
      >
        <ShowPopup countStart={countStart} />

        <PopupEngineRoot
          enable={() => {
            console.log('enable scroll lock');
          }}
          lock={() => {
            console.log('lock scroll lock');
          }}
        />
      </PopupEngineProvider>
    </main>
  );
}

export default App;
