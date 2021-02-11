import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import Header from './components/Header/Header';
import Home from "./containers/Home/Home";
import Users from "./containers/Users/Users";
import Topics from "./containers/Topics/Topics";
import SingleArticle from "./containers/SingleArticle/SingleArticle";
import NewArticle from "./containers/NewArticle/NewArticle";
import './App.scss';

const App: React.FC = () => {
    const routes = (
      <Switch>
        <Route path="/article/:id" component={SingleArticle} />
        <Route path="/users" component={Users} />
        <Route path="/topics" component={Topics}/>
        <Route path="/newArticle" component={NewArticle} />
        <Route path="/" component={Home}/>
        <Redirect to="/" />
      </Switch>
    )
  return (
    <React.Fragment>
    <Header />
    {routes}
    </React.Fragment>
  );
}

export default App;
