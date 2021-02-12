import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Topic } from '../../types/types';
import { RootState } from '../../index';
import { getAllTopicsStart } from '../../store/actions/topicsAction';
import Spinner from '../../components/Spinner/Spinner';
import './Topics.scss';

const Topic1: React.FC = () => {
  const dispatch = useDispatch();
  const topics = useSelector((state: RootState) => state.topicReducer.topics);

  React.useEffect(() => {
    dispatch(getAllTopicsStart());
  }, [dispatch]);
  return (
    <main>
      {topics.length > 0 ? (
        topics.map((topic: Topic) => {
          return (
            <div key={topic.slug}>
              <p>{topic.slug}</p>
              <p>{topic.description}</p>
            </div>
          );
        })
      ) : (
        <h3>No Topics Found!</h3>
      )}
    </main>
  );
};

export default Topic1;
