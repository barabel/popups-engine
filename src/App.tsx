import { styles } from './app.css';
import { popups } from './views/popup-templates';
import { Popups } from './lib/popups';
import { PopupProvider } from './lib/popups/context';
import { ShowPopup } from './views/show-popup';

function App() {
  return (
    <main
      className={styles.main}
    >
      <PopupProvider>
        <ShowPopup />

        <Popups
          popups={popups}
        />
      </PopupProvider>
    </main>
  );
}

export default App;
