import * as actionTypes from '../actions/actionTypes';
import { Comment } from '../../types/types';
import { Action } from '../../types/commentTypes';

interface Store {
  comments: Comment[];
  error: string | null;
}

const initialState: Store = {
  comments: [],
  error: null,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_COMMENTS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_ARTICLE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.comments,
        loading: false,
      };
    case actionTypes.GET_ARTICLE_COMMENTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case actionTypes.POST_ARTICLE_COMMENTS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.POST_ARTICLE_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.comment],
        loading: false,
      };
    case actionTypes.POST_ARTICLE_COMMENTS_FAIL:
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
