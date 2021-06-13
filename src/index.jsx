import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
import { Cameras } from './pages/Cameras';
import { Main } from './pages/Main';
import { Prices } from './pages/Prices';
import { Registration } from './pages/Registration';
import './style.css';
import { Details } from './pages/Details';
import { Gallery } from './pages/Gallery';
import { Login } from './pages/LogIn';
import { Settings } from './pages/Settings';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <Router>
        <Header isLogged={isLogged} handleLogin={setIsLogged} />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/price-list">
            <Prices />
          </Route>
          <Route path="/registration">
            <Registration handleLogin={setIsLogged} />
          </Route>
          <Route path="/cameras">
            <Cameras />
          </Route>
          <Route path="/details">
            <Details />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/login">
            <Login handleLogin={setIsLogged} />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

render(<App />, document.querySelector('#app'));
