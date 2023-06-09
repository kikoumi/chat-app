import { Provider } from "react-redux";
import { store } from "./store";
import { initializeFirebaseApp } from "../lib/firebase/firebase";
import { RouterConfig } from "../router/Route";
import "../App.css";

initializeFirebaseApp();
function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <RouterConfig />
            </Provider>
        </div>
    );
}

export default App;
