import * as actionTypes from "../actions/actionTypes";
import { Comment } from "../../types/types";

interface Store {
    comments: Comment[]
    error: string | null
}

interface GetArticleCommentsStart {
    type: "GET_ARTICLE_COMMENTS_START";
}

interface GetArticleCommentsSuccess {
    type: "GET_ARTICLE_COMMENTS_SUCCESS";
    comments: Comment[]
}

interface GetArticleCommentsFail {
    type: "GET_ARTICLE_COMMENTS_FAIL";
    error: string
}

export type Action = GetArticleCommentsStart | GetArticleCommentsSuccess | GetArticleCommentsFail;

const initialState: Store = {
    comments: [],
    error: null,
};

const reducer = (state = initialState, action:Action) => {
    switch (action.type) {
        case actionTypes.GET_ARTICLE_COMMENTS_START:
            return  {
                ...state,
                loading: true,
            };
        case actionTypes.GET_ARTICLE_COMMENTS_SUCCESS:
            return  {
                ...state,
                comments: action.comments,
                loading: false,
            };
        case actionTypes.GET_ARTICLE_COMMENTS_FAIL:
            return  {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default reducer;