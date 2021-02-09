import * as actionTypes from "../actions/actionTypes";
import { Article } from '../../types/types';

interface Store {
  articles: Article[],
  error: string | null,
  loading: boolean
}

interface ActionA {
  type: 'GET_ARTICLES_START';
}

interface ActionB {
  type: 'GET_ARTICLES_SUCCESS';
  articles: Article[]
}

interface ActionC {
  type: 'GET_ARTICLES_FAIL';
  error: string
}

export type Action = ActionA | ActionB | ActionC;

const initialState: Store = {
  articles: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLES_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        loading: false,
      };
    case actionTypes.GET_ARTICLES_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;