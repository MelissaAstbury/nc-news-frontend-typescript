import { Article } from './types';

interface GetArticleStart {
  type: 'GET_ARTICLES_START';
}
interface GetArticleSuccess {
  type: 'GET_ARTICLES_SUCCESS';
  articles: Article[];
}
interface GetArticleFail {
  type: 'GET_ARTICLES_FAIL';
  error: string;
}
interface GetArticleByIdStart {
  type: 'GET_ARTICLE_BY_ID_START';
}
interface GetArticleByIdSuccess {
  type: 'GET_ARTICLE_BY_ID_SUCCESS';
  article: Article;
}
interface GetArticleByIdFail {
  type: 'GET_ARTICLE_BY_ID_FAIL';
  error: string;
}
interface PostArticleStart {
  type: 'POST_ARTICLE_START';
}
interface PostArticleSuccess {
  type: 'POST_ARTICLE_SUCCESS';
  article: Article;
}
interface PostArticleFail {
  type: 'POST_ARTICLE_FAIL';
  error: string;
}

interface UpdateArticleStart {
  type: 'UPDATE_ARTICLE_BY_ID_START';
}

interface UpdateArticleSuccess {
  type: 'UPDATE_ARTICLE_BY_ID_SUCCESS';
  updatedArticle: Article;
  articleId: number;
}

interface UpdateArticleFail {
  type: 'UPDATE_ARTICLE_BY_ID_FAIL';
  error: string;
}

export type Action =
  | GetArticleStart
  | GetArticleSuccess
  | GetArticleFail
  | GetArticleByIdStart
  | GetArticleByIdSuccess
  | GetArticleByIdFail
  | PostArticleStart
  | PostArticleSuccess
  | PostArticleFail
  | UpdateArticleStart
  | UpdateArticleSuccess
  | UpdateArticleFail;
