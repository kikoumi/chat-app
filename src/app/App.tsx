import { ChatArea } from "../feature/message/ChatArea";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <ChatArea />
            </Provider>
        </div>
    );
}

export default App;