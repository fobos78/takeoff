import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ThemeContext from '../src/context';
import Header from './components/Header';
import Contacts from './components/Contacts';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';

function Routes() {
  const { header } = useContext(ThemeContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/contacts">
            { header.logout ? <Contacts /> : <Home /> }
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
