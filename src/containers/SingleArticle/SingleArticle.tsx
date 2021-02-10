import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from '../..';
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
        <div>
            {article?.title}
            <p>This is the single article page</p>
        </div>
    )
};

export default SingleArticle;