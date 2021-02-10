import { Article } from "../../types/types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./ArticleCard.scss";

interface Props {
    article: Article
}

const ArticleList: React.FC<Props> = ({article}) => {
    return (
        <div className="card-container">
        <ul >
            <li>
                <h4 className="title">{article.title}</h4>
                <p className="topic">{article.topic}</p>
                <p className="votes">{article.votes}</p>
            </li>
        </ul>
        <Link to={`/article/${article.article_id}`}>
            <Button btnType="success">READ MORE</Button>
        </Link>
        </div>
    )
};

{/* <Link to={`/fabric`}>
<Button btnType="success">SHOP NOW</Button>
</Link> */}

export default ArticleList;