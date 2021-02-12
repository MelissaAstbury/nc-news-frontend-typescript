import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { CreateArticle } from '../../types/types';
import { postNewArticleStart } from '../../store/actions/articlesAction';
import Button from '../../components/Button/Button';
import './NewArticle.scss';
import { useDispatch } from 'react-redux';

const NewArticle = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [topic, setTopic] = React.useState('coding');
  const [body, setBody] = React.useState('');
  const history = useHistory();

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    const newArticle: CreateArticle = {
      username: username,
      title: title,
      topic: topic,
      body: body,
    };
    if (
      newArticle.username.length < 1 ||
      newArticle.title.length < 1 ||
      newArticle.topic.length < 1 ||
      newArticle.body.length < 1
    ) {
      alert('Fields are not complete');
      return;
    }
    dispatch(postNewArticleStart(newArticle));
    history.push('/');
  };

  return (
    <div>
      <Link to="/">
        <Button btnType="slim">Back</Button>
      </Link>
      <form>
        <p>Complete the following form to submit a new article:</p>
        <label className="input">
          Username:
          <input
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
            required
          />
        </label>
        <label>
          Title:
          <input
            placeholder="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className="input"
            required
            value={title}
          />
        </label>
        <select
          className="input"
          onChange={(e) => {
            setTopic(e.target.value);
          }}
          value={topic}
          required
        >
          <option>coding</option>
          <option>cooking</option>
          <option>football</option>
        </select>
        <label>
          Body:
          <input
            placeholder="body"
            className="input"
            onChange={(e) => {
              setBody(e.target.value);
            }}
            value={body}
            required
          />
        </label>
        <Button clicked={handleSubmit} btnType="success">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewArticle;
