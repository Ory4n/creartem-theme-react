import React from 'react';
import { Router, Route } from 'react-router';

import App from './App';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
    </Route>
  </Router>
);

export default Routes;
