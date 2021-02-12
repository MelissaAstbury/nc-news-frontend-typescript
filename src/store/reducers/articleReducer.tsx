import * as actionTypes from '../actions/actionTypes';
import { Article } from '../../types/types';
import { Action } from '../../types/articleTypes';

interface Store {
  articles: Article[];
  article: Article | null;
  error: string | null;
  loading: boolean;
}

const initialState: Store = {
  articles: [],
  article: null,
  error: null,
  loading: true,
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
    case actionTypes.GET_ARTICLE_BY_ID_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ARTICLE_BY_ID_SUCCESS:
      return {
        ...state,
        article: action.article,
        loading: false,
      };
    case actionTypes.GET_ARTICLE_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.POST_ARTICLE_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.POST_ARTICLE_SUCCESS:
      return {
        ...state,
        articles: [...state.articles, action.article],
        loading: false,
      };
    case actionTypes.POST_ARTICLE_FAIL:
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
