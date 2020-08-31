import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Login from '../Login';
import ThemeContext from '../../context';

function Logout() {
  const history = useHistory();
  const { users, setUsers, header, setHeader, user, setUser } = useContext(ThemeContext);

  useEffect(() => {
    setUser({});
    setHeader({ ...header, login: true, logout: false });
  }, []);

  return (
    <Login />
  );
}

export default Logout;
