import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../..';

import SingleArticle from '../../components/Article/Article';
import { Article } from "../../types/types";
import { getAllArticlesStart } from "../../store/actions/articlesAction";
import "./Home.scss";

const Home: React.FC = () => {
    const dispatch = useDispatch()
    const articles = useSelector((state: RootState) => state.articleReducer.articles)

    useEffect(() => {
        dispatch(getAllArticlesStart())
    }, [dispatch])
    return (
        <div>
            {
                articles.length > 0 ? 
                articles.map((article: Article) => {
                    return <SingleArticle key={article.title} article={article}/>
                })
                : 
                <h3>No Articles Found!</h3>
            }
        </div>
    )
}

export default Home;
