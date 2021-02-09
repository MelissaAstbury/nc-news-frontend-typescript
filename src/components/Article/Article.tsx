import { Article } from "../../types/types";
import "./Article.scss";

interface Props {
    article: Article
}

const ArticleList: React.FC<Props> = ({article}) => {
    return (
        <ul>
            <li>{article.title}</li>
        </ul>
    )
};

export default ArticleList;