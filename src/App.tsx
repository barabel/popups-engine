import { styles } from "./app.css"
import { Popups } from "./view/popups"
import { PopupProvider } from "./view/popups/context"
import { ShowPopup } from "./view/show-popup"

function App() {
  return (
    <main
      className={styles.main}
    >
      <PopupProvider>
        <ShowPopup />

        <Popups />
      </PopupProvider>
    </main>
  )
}

export default App
