import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux'
import Root from "./views/Root/Root";
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from "./store/configureStore"



ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Root/>
        </PersistGate>
    </Provider>


    , document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
