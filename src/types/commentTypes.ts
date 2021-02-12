import { Comment } from './types';

interface GetArticleCommentsStart {
  type: 'GET_ARTICLE_COMMENTS_START';
}

interface GetArticleCommentsSuccess {
  type: 'GET_ARTICLE_COMMENTS_SUCCESS';
  comments: Comment[];
}

interface GetArticleCommentsFail {
  type: 'GET_ARTICLE_COMMENTS_FAIL';
  error: string;
}

interface PostArticleCommentStart {
  type: 'POST_ARTICLE_COMMENTS_START';
}

interface PostArticleCommentSuccess {
  type: 'POST_ARTICLE_COMMENTS_SUCCESS';
  comment: Comment;
}

interface PostArticleCommentFail {
  type: 'POST_ARTICLE_COMMENTS_FAIL';
  error: string;
}

export type Action =
  | GetArticleCommentsStart
  | GetArticleCommentsSuccess
  | GetArticleCommentsFail
  | PostArticleCommentStart
  | PostArticleCommentSuccess
  | PostArticleCommentFail;
