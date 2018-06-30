import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import App from './components/App';
import styles from './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// import registerServiceWorker from './registerServiceWorker';

const initialState = {};

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

// registerServiceWorker();
