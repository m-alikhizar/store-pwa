import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import styles from './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// import registerServiceWorker from './registerServiceWorker';

const initialState = {};

let store = configureStore(initialState);

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

// registerServiceWorker();
