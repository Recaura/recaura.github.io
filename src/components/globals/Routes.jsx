import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivacyPolicyPage from '../legal/PrivacyPolicyPage.jsx';
import HomePage from '../home/HomePage';

export default function Routes() {
  return (
    <Switch>
      <Route path="/privacy-policy">
        <PrivacyPolicyPage />
      </Route>
      <Route path={['/', '/home']}>
        <HomePage />
        {/* <PrivacyPolicyPage /> */}
      </Route>
    </Switch>
  );
}
