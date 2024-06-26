import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";
import store from "./services/store";

const persistedStore = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  //  <BrowserRouter> <App /></BrowserRouter>
  //</React.StrictMode>,
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistedStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PersistGate>
</Provider>
)
