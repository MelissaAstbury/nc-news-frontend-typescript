import { Article } from "../../store/actions/articlesAction";
import "./Article.scss";

interface Props {
    article: Article
}

const ArticleList: React.FC<Props> = ({article}) => {
    console.log(article);
    return (
        <ul>
            <li>hi</li>
        </ul>
    )
};

export default ArticleList;