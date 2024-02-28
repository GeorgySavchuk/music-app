import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './shared/config'
import {App} from "./app/App.tsx";
import './app/app.css'
import {setupStore} from "./shared/model";
ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={setupStore()}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
