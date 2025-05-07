import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoute from "./app/routing/AppRoute";
import store from "./app/redux/store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppRoute/>
        </Provider>
    </React.StrictMode>
);
