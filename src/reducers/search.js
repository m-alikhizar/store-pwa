import ActionTypes from '../constants/ActionTypes';
import { Suggestion } from '../models';
import { QueryTransformer } from '../helpers/utils';


let _allItems = [];

const search = (state = { suggestions: [], query: '' }, action) => {

  switch(action.type) {

    case ActionTypes.ALL_ITEMS:

      _allItems = [...action.items];

      return state;

    case ActionTypes.FETCH_SEARCH_SUGGESTIONS:

      const q = action.query.trim();

      if(q) {
        const matcher = new QueryTransformer(q);
        const result = _allItems.filter(p => p.name.match(matcher))
          .map(item => new Suggestion(item.name));

        return { ...state, query: action.query, suggestions: [...result] };
      } else {
        return { ...state, query: action.query, suggestions: [] };
      }

    default:
      return state;
  }
};

export default search;
