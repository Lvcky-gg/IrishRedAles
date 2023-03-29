import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';

declare global {
  interface Window {
    store: any,
    csrfFetch: any
  }
}

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  restoreCSRF();
  //fix this
  window.csrfFetch = csrfFetch;
  //figure out how to use window.store
  window.store= store;
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
