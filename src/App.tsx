import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import LegalCentre from './pages/LegalCentre/LegalCentre';
import Policy from './pages/Policy/Policy';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/legalCentre'>
          <LegalCentre />
        </Route>
        <Route path='/:policy' children={<Policy />} />
      </Switch>
    </Router>
  );
};
export default App;
