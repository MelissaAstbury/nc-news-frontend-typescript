import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";

import Header from './components/Header/Header';
import Home from "./containers/Home/Home";
import Topic1 from "./containers/Topic1/Topic1";
import './App.scss';

const App: React.FC = () => {
    const routes = (
      <Switch>
        <Route path="/topic1" component={Topic1}/>
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
