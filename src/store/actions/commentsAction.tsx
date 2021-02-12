import axios from 'axios';
import * as type from './actionTypes';
import { Comment, CreateComment } from '../../types/types';

export const getAllArticleCommentsStart = (articleId: string) => {
  return (dispatch: any) => {
    axios
      .get(
        `https://mels-news-api.herokuapp.com/api/articles/${articleId}/comments`
      )
      .then((response) => {
        dispatch(getAllArticleCommentsSuccess(response.data.comments));
      })
      .catch((error) => {
        dispatch(getAllArticleCommentsFail(error));
      });
  };
};

export const getAllArticleCommentsSuccess = (comments: Comment[]) => {
  return {
    type: type.GET_ARTICLE_COMMENTS_SUCCESS,
    comments: comments,
  };
};

export const getAllArticleCommentsFail = (error: string) => {
  return {
    type: type.GET_ARTICLE_COMMENTS_FAIL,
    error: error,
  };
};

export const postArticleCommentStart = (
  articleId: string,
  newComment: CreateComment
) => {
  return (dispatch: any) => {
    axios
      .post(
        `https://mels-news-api.herokuapp.com/api/articles/${articleId}/comments`,
        newComment
      )
      .then((response) => {
        dispatch(postArticleCommentSuccess(response.data.comment));
      })
      .catch((error) => {
        dispatch(postArticleCommentFail(error));
      });
  };
};

export const postArticleCommentSuccess = (comment: Comment) => {
  return {
    type: type.POST_ARTICLE_COMMENTS_SUCCESS,
    comment: comment,
  };
};

export const postArticleCommentFail = (error: string) => {
  return {
    type: type.POST_ARTICLE_COMMENTS_FAIL,
    error: error,
  };
};
