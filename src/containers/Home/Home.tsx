import React from 'react'
import { useDispatch, useSelector } from "react-redux";

import { RootState } from '../..';
import SingleArticle from '../../components/ArticleCard/ArticleCard';
import { Article } from "../../types/types";
import { getAllArticlesStart } from "../../store/actions/articlesAction";
import "./Home.scss";

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state: RootState) => state.articleReducer.articles)

    React.useEffect(() => {
        dispatch(getAllArticlesStart())
    }, [dispatch])
    return (
        <main>
            {
                articles.length > 0 ? 
                articles.map((article: Article) => {
                    return <SingleArticle key={article.title} article={article}/>
                })
                : 
                <h3>No Articles Found!</h3>
            }
        </main>
    )
}

export default Home;
