import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DarkModeContextProvider } from "./components/screens/context/darkModeContext";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
//dev tools
import logger from "redux-logger";
//dev tools
import rootReducer from "./reducers"
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, logger),
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
