import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

import Button from '../Button/Button';
import { RootState } from '../../';
import {
  getAllArticleCommentsStart,
  postArticleCommentStart,
} from '../../store/actions/commentsAction';
import './Comments.scss';
import { CreateComment } from '../../types/types';

interface Props {
  articleId: string;
}

const Comments: React.FC<Props> = ({ articleId }) => {
  const dispatch = useDispatch();
  const comments = useSelector(
    (state: RootState) => state.commentsReducer.comments
  );

  const [username, setUsername] = React.useState('');
  const [body, setBody] = React.useState('');

  const handleSubmit = (e: MouseEvent) => {
    e.preventDefault();
    const newComment: CreateComment = {
      username: username,
      body: body,
    };
    if (newComment.username.length < 1 || newComment.body.length < 1) {
      alert('Fields are not complete');
      return;
    }
    dispatch(postArticleCommentStart(articleId, newComment));
    setUsername('');
    setBody('');
  };

  React.useEffect(() => {
    dispatch(getAllArticleCommentsStart(articleId));
  }, [dispatch]);

  return (
    <section>
      <h3>Add a new comment here:</h3>
      <div className="comments">
        <form>
          <label>
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
            Comment:
            <input
              placeholder="comment"
              onChange={(e) => {
                setBody(e.target.value);
              }}
              value={body}
              required
            />
          </label>
          <Button btnType="interact" clicked={handleSubmit}>
            Add New Comment
          </Button>
        </form>
        {comments.map((comment) => (
          <div
            key={comment.comment_id.toString()}
            className="comment-container"
          >
            <p>{comment.body}</p>
            <FaThumbsUp />
            <FaThumbsDown />
            <div>
              <Button btnType="danger slim">Delete Comment</Button>
              <Button btnType="warning slim">Edit Comment</Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comments;
