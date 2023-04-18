import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import store from './store'
import App from './App';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
        {/* <Modal /> */}
      </BrowserRouter>
    </Provider>   
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
);
