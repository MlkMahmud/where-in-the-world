import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Home from './home';
import './styles.scss';

const App = () => (
  <Router>
    <Header />
    <Main>
      <Route exact path="/" component={Home} />
    </Main>
  </Router>
);

export default App;
