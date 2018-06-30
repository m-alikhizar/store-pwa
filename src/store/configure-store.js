import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import createAPIMiddleware from '../middlewares/api.middleware';

let store = null;

export function configureStore(state) {

  const middlewares = applyMiddleware(createAPIMiddleware());

  store = createStore( reducers, state,  middlewares);

  console.log("[LOG] Initial Store State: ", store);

  return store;
}

export function getStore() {
  return store;
}
