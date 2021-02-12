import * as actionTypes from '../actions/actionTypes';
import { User } from '../../types/types';

interface Store {
  users: User[];
  error: string | null;
  loading: boolean;
}

interface GetUsersStart {
  type: 'GET_USERS_START';
}

interface GetUsersSuccess {
  type: 'GET_USERS_SUCCESS';
  users: User[];
}

interface GetUsersFail {
  type: 'GET_USERS_FAIL';
  error: string;
}

export type Action = GetUsersStart | GetUsersSuccess | GetUsersFail;

const initialState: Store = {
  users: [],
  error: null,
  loading: true,
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.GET_USERS_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case actionTypes.GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
