import React from 'react';
import Login from './components/Login'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import MemberArea from './components/MemberArea'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

export default function renderRouter() {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={MemberArea}>
        <IndexRoute component={Dashboard}/>
      </Route>
      <Route path="/login" component={Login}/>
      <Route path="/user/:id" component={Dashboard}/>
      <Route path="*" component={NotFound}/>
    </Router>
  );
}