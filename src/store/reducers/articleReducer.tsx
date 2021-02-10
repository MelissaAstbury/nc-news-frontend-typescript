import * as actionTypes from "../actions/actionTypes";
import { Article } from '../../types/types';

interface Store {
  articles: Article[],
  article: Article | null,
  error: string | null,
  loading: boolean
}

interface GetArticleStart {
  type: 'GET_ARTICLES_START';
}
interface GetArticleSuccess {
  type: 'GET_ARTICLES_SUCCESS';
  articles: Article[]
}
interface GetArticleFail {
  type: 'GET_ARTICLES_FAIL';
  error: string
}
interface GetArticleByIdStart {
  type: 'GET_ARTICLE_BY_ID_START';
}
interface GetArticleByIdSuccess {
  type: 'GET_ARTICLE_BY_ID_SUCCESS';
  article: Article
}
interface GetArticleByIdFail {
  type: 'GET_ARTICLE_BY_ID_FAIL';
  error: string
}

export type Action = GetArticleStart | GetArticleSuccess | GetArticleFail | GetArticleByIdStart | GetArticleByIdSuccess | GetArticleByIdFail;

const initialState: Store = {
  articles: [],
  article: null,
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
    default:
      return state;
  }
};

export default reducer;