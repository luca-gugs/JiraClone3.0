import React, { useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/atoms/routing/PrivateRoute';
import Nav from './components/organisms/Nav';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Board from './pages/Board';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute exact path='/board/:id' component={Board} />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
