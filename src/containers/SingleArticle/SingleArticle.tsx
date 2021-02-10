import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaReadme } from "react-icons/fa";

import { RootState } from '../..';
import Button from "../../components/Button/Button";
import Comments from "../../components/Comments/Comments";
import { getAllArticleByIdStart } from "../../store/actions/articlesAction";
import "./SingleArticle.scss";

interface Props {
    match: { params: { id: string }}
}

const SingleArticle: React.FC<Props> = ({match}) => {
    const dispatch = useDispatch()
    const article = useSelector((state: RootState) => state.articleReducer.article)
    const [articleId] = React.useState(match.params.id);

    React.useEffect(() => {
        dispatch(getAllArticleByIdStart(articleId))
    }, [dispatch])

    return (
        article ? (
            <>
            <Link to="/">
                <Button btnType="slim">Back</Button>
                </Link>
                <div className="single-article">
                    <h3>{article.title}</h3>
                    <FaReadme size={70} />
                    <p>{article.author}</p>
                    <p>{article.topic}</p>
                    <p>Votes: {article.votes}</p>
                    <p>Comment Count: {article.comment_count}</p>
                    <Comments articleId={articleId} />
                </div>
            </>
        ) : (
            <h3>Sorry could not find your article</h3>
        )
    )
};

export default SingleArticle;