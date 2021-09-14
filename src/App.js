import React from 'react';
import './style.scss';
import ListTodo from './Todos/ListTodo';
import NavComponent from './Nav/NavComponent';
import HomeComponent from './Home/HomeComponent';
import AboutComponent from './About/AboutComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div>
        <NavComponent />
        <Switch>
          <Route path="/" exact>
            <HomeComponent />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <AboutComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
