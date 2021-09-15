import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../Screens/Home/index';
import Profile from '../Screens/Profile'

export default function Routing() {
  return (
    <Router>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          {/* Add more routes here */}
        </Switch>
    </Router>
  );
}