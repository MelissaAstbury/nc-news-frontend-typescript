import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import './index.scss';
import App from './App';
import articleReducer from "./store/reducers/articleReducer";
import commentsReducer from "./store/reducers/commentReducer";
import userReducer from "./store/reducers/userReducer";

const rootReducer = combineReducers({
  articleReducer: articleReducer,
  commentsReducer: commentsReducer,
  userReducer: userReducer
});

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

