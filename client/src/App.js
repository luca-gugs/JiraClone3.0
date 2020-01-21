import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing/Landing';
import Register from './components/Register';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';

import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import store from './store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  //use effect takes will dispatch the user from the store
  //dispatch is just a method on the store
  //the empty brackets are to prevent useEffect from running endlessly
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Route exact path='/' component={Landing} />
      <section>
        <Switch>
          <Route exact path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </section>
    </Router>
  );
};

export default App;
