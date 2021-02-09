import axios from "axios";
import * as type from "./actionTypes";
import {Action} from '../reducers/articleReducer';

export interface Article {
    article_id: number,
    title: string,
    created_at: string,
    votes: number,
    topic: string,
    author: string,
    comment_count: string
}

export const getAllArticlesStart = () => {
    return (dispatch: any) => {
        axios 
        .get("https://mels-news-api.herokuapp.com/api/articles")
        .then((response) => {
            dispatch(getAllArticlesSuccess(response.data))
        }).catch((error) => {
            dispatch(getAllArticlesFail(error));
        })
    }
}

export const getAllArticlesSuccess = (articles: Article[]) => {
    return {
        type: type.GET_ARTICLES_SUCCESS,
        articles: articles
    };
}

export const getAllArticlesFail = (error: string) => {
    return {
        type: type.GET_ARTICLES_FAIL,
        error: error
    };
};