import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../components/Button/Button';
import { RootState } from '../../index';
import { getAllUsersStart } from '../../store/actions/usersAction';
import { User } from '../../types/types';
import Spinner from '../../components/Spinner/Spinner';
import './Users.scss';

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.userReducer.users);

  const loading = useSelector((state: RootState) => state.userReducer.loading);

  React.useEffect(() => {
    dispatch(getAllUsersStart());
  }, [dispatch]);
  return (
    <>
      <Link to="/">
        <Button btnType="slim">Back</Button>
      </Link>
      <main>
        {loading ? (
          <Spinner />
        ) : users.length > 0 ? (
          users.map((user: User) => {
            return (
              <div key={user.username}>
                <p>{user.username}</p>
                <p>{user.name}</p>
                <img alt="users avatar profile" src={user.avatar_url} />
              </div>
            );
          })
        ) : (
          <h3>No Users Found!</h3>
        )}
      </main>
    </>
  );
};

export default Users;
