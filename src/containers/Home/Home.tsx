import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button/Button';
import { RootState } from '../../index';
import ArticleCard from '../../components/ArticleCard/ArticleCard';
import { Article } from '../../types/types';
import { getAllArticlesStart } from '../../store/actions/articlesAction';
import Spinner from '../../components/Spinner/Spinner';
import './Home.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const articles = useSelector(
    (state: RootState) => state.articleReducer.articles
  );
  const loading = useSelector(
    (state: RootState) => state.articleReducer.loading
  );

  React.useEffect(() => {
    dispatch(getAllArticlesStart());
  }, [dispatch]);
  return (
    <>
      <Link to="/newArticle">
        <Button btnType="success">Add new article</Button>
      </Link>
      <main>
        {loading ? (
          <Spinner />
        ) : articles.length > 0 ? (
          articles.map((article: Article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })
        ) : (
          <h3>No Articles Found!</h3>
        )}
      </main>
    </>
  );
};

export default Home;
