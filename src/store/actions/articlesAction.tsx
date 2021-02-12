import axios from 'axios';
import * as type from './actionTypes';
import { Article, CreateArticle } from '../../types/types';

export const getAllArticlesStart = () => {
  return (dispatch: any) => {
    axios
      .get('https://mels-news-api.herokuapp.com/api/articles')
      .then((response) => {
        dispatch(getAllArticlesSuccess(response.data.articles));
      })
      .catch((error) => {
        dispatch(getAllArticlesFail(error));
      });
  };
};

export const getAllArticlesSuccess = (articles: Article[]) => {
  return {
    type: type.GET_ARTICLES_SUCCESS,
    articles: articles,
  };
};

export const getAllArticlesFail = (error: string) => {
  return {
    type: type.GET_ARTICLES_FAIL,
    error: error,
  };
};

export const getAllArticleByIdStart = (articleId: string) => {
  return (dispatch: any) => {
    axios
      .get(`https://mels-news-api.herokuapp.com/api/articles/${articleId}`)
      .then((response) => {
        dispatch(getAllArticleByIdSuccess(response.data.article));
      })
      .catch((error) => {
        dispatch(getAllArticleByIdFail(error));
      });
  };
};

export const getAllArticleByIdSuccess = (article: Article) => {
  return {
    type: type.GET_ARTICLE_BY_ID_SUCCESS,
    article: article,
  };
};

export const getAllArticleByIdFail = (error: string) => {
  return {
    type: type.GET_ARTICLE_BY_ID_FAIL,
    error: error,
  };
};

export const postNewArticleStart = (newArticle: CreateArticle) => {
  return (dispatch: any) => {
    axios
      .post('https://mels-news-api.herokuapp.com/api/articles', newArticle)
      .then((response) => {
        dispatch(postNewArticleSuccess(response.data.article));
      })
      .catch((error) => {
        console.log(error);
        dispatch(postNewArticleFail(error));
      });
  };
};

export const postNewArticleSuccess = (article: Article) => {
  return {
    type: type.POST_ARTICLE_SUCCESS,
    article: article,
  };
};

export const postNewArticleFail = (error: string) => {
  return {
    type: type.POST_ARTICLE_FAIL,
    error: error,
  };
};
