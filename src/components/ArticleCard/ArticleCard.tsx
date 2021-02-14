import { Article } from '../../types/types';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './ArticleCard.scss';

interface Props {
  article: Article;
}

const ArticleList: React.FC<Props> = ({ article }) => {
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
        <FaThumbsUp />
        <FaThumbsDown />
      </div>
    </div>
  );
};

export default ArticleList;
