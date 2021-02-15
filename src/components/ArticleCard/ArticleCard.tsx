import React from 'react';
import { Article } from '../../types/types';
import { useDispatch } from 'react-redux';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './ArticleCard.scss';
import { updateArticleStart } from '../../store/actions/articlesAction';
interface Props {
  article: Article;
}

const ArticleCard: React.FC<Props> = ({ article }) => {
  const dispatch = useDispatch();

  const handleClick = (value: number) => {
    const updatedArticle: Article = article;
    if (value === 1) {
      updatedArticle.votes += 1;
    } else {
      updatedArticle.votes -= 1;
    }
    dispatch(updateArticleStart(article.article_id, updatedArticle));
  };

  return (
    <div className="card-container">
      <ul>
        <li>
          <h4 className="title">{article.title}</h4>
          <p className="topic">{article.topic}</p>
          <p className="votes">{article.votes}</p>
        </li>
      </ul>
      <Link to={`/article/${article.article_id}`}>
        <Button btnType="success">READ MORE</Button>
      </Link>
      <div className="vote">
        <p>Have your say!</p>
        <FaThumbsUp
          onClick={() => {
            handleClick(1);
          }}
        />
        <FaThumbsDown
          onClick={() => {
            handleClick(-1);
          }}
        />
      </div>
    </div>
  );
};

export default ArticleCard;
