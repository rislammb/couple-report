import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import Recover from '../pages/Recover';
import CoupleForm from '../pages/CoupleForm';
import FullFormPage from '../pages/FullFormPage';

const Content = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/create' component={CreateAccount} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/recover' component={Recover} />
      <Route
        exact
        path='/:districtName/:upazilaName/:unionName/edit'
        component={CoupleForm}
      />
      <Route
        exact
        path='/:districtName/:upazilaName/:unionName'
        component={FullFormPage}
      />
      <Route
        exact
        path='/:districtName/:upazilaName'
        component={FullFormPage}
      />
      <Route exact path='/:districtName' component={FullFormPage} />
    </Switch>
  );
};

export default Content;
