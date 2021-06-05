import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
import { Cameras } from './pages/Cameras';
import { Main } from './pages/Main';
import { Prices } from './pages/Prices';
import { Registration } from './pages/Registration';
import './style.css';
import { Details } from './pages/Details';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/price-list">
          <Prices />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/cameras">
          <Cameras />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </>
);

render(<App />, document.querySelector('#app'));
