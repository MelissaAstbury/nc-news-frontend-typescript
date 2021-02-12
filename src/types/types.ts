export interface Article {
  article_id: number;
  title: string;
  created_at: string;
  votes: number;
  topic: string;
  author: string;
  comment_count: string;
}
export interface CreateArticle {
  username: string;
  title: string;
  topic: string;
  body: string;
}

export interface Comment {
  comment_id: Number;
  body: string;
  votes: Number;
  created_at: string;
  article_id: Number;
  author: string;
}

export interface CreateComment {
  body: string;
  username: string;
}

export interface User {
  username: string;
  name: string;
  avatar_url: string;
}

export interface Topic {
  slug: string;
  description: string;
}
