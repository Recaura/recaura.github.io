import React from 'react';
import { Switch, Route } from "react-router-dom";
import PrivacyPolicyPage from '../legal/PrivacyPolicyPage.jsx';
import HomePage from '../home/HomePage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path={['/', '/home']}>
        <HomePage />
      </Route>
      <Route path="/privacy-policy">
        <PrivacyPolicyPage />
      </Route>
    </Switch>
  );
}
