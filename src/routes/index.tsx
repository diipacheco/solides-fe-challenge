import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Signin from '../pages/Signin';
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';
import Appointments from '../pages/Appointments';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" exact component={Signup} />

      <Route path="/dashboard" isPrivate component={Dashboard} />
      <Route path="/appointments" isPrivate component={Appointments} />
    </Switch>
  );
};

export default Routes;
