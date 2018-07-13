import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';
import createAPIMiddleware from '../middlewares/api.middleware';

export function configureStore(state) {
  const middlewares = applyMiddleware(createAPIMiddleware());

  const store = createStore(reducers, state, middlewares);

  return store;
}
