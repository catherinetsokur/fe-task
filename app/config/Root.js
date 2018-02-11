import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';

const Root = () => {
  return (
    <Router>
      <Route path="/" component={Dashboard} />
    </Router>
  );
};

export default Root;

