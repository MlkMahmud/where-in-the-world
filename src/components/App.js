import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header';
import Main from './main';
import './styles.scss';

const App = () => (
  <Router>
    <Header />
    <Main>
      <Route exact path="/" render={() => (<div>What It Do Baby.</div>)} />
    </Main>
  </Router>
);

export default App;
