import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../components/Button/Button";
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
        <>
        <Link to="/newArticle">
        <Button btnType="success">Add new article</Button>
        </Link>
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
        </>
    )
}

export default Home;
