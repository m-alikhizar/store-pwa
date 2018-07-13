import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './store';
import App from './components/App';
import styles from './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const Storage = require('./helpers/storage');

// import registerServiceWorker from './registerServiceWorker';

let initialState = {};

Storage.default
  .read('cart')
  .then((cart) => {
    console.log('Storage syncing success.');
    initialState = { cart };
  })
  .catch(() => {
    console.info('Storage synicing failed.');
  })
  .then(() => {
    const store = configureStore(initialState);

    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>,
      document.getElementById('root')
    );
  });

// registerServiceWorker();
