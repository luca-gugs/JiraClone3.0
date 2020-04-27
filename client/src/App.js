import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Profiles from './pages/Profiles/Profiles';

import CreateProfile from './components/ProfileComponents/CreateProfile/CreateProfile';
import EditProfile from './components/ProfileComponents/EditProfile/EditProfile';
import AddExperience from './components/ProfileComponents/AddExperience/AddExperience';
import AddEducation from './components/ProfileComponents/AddEducation/AddEducation';
import PrivateRoute from './components/routing/PrivateRoute';

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

          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/profiles' component={Profiles} />

          <PrivateRoute path='/create-profile' component={CreateProfile} />
          <PrivateRoute path='/edit-profile' component={EditProfile} />
          <PrivateRoute path='/add-experience' component={AddExperience} />
          <PrivateRoute path='/add-education' component={AddEducation} />
        </Switch>
      </section>
    </Router>
  );
};

export default App;
