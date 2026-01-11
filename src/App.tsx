import { ShowPopup } from '@views/show-popup';
import { popups } from '@views/popup-templates';
import { PopupsEngineProvider } from '@lib/popups/context/provider';
import { PopupsEngineRoot } from '@lib/popups';
import styles from './app.module.scss';

const countStart = 0;

function App() {
  return (
    <main
      className={styles.main}
    >
      <PopupsEngineProvider
        popups={popups}
      >
        <ShowPopup countStart={countStart} />

        <PopupsEngineRoot
          enableBodyScroll={() => {
            console.log('enable scroll lock');
          }}
          lockBodyScroll={() => {
            console.log('lock scroll lock');
          }}
        />
      </PopupsEngineProvider>
    </main>
  );
}

export default App;
