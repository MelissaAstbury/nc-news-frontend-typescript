import { Article } from "../../types/types";
import "./ArticleCard.scss";

interface Props {
    article: Article
}

const ArticleList: React.FC<Props> = ({article}) => {
    return (
        <ul className="card-container">
            <li>
                <h4 className="title">{article.title}</h4>
                <p className="topic">{article.topic}</p>
                <p className="votes">{article.votes}</p>
            </li>
        </ul>
    )
};

export default ArticleList;