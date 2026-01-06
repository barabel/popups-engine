import { styles } from './app.css';
import { popups } from './view/popup-templates';
import { Popups } from './view/popups';
import { PopupProvider } from './view/popups/context';
import { ShowPopup } from './view/show-popup';

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
