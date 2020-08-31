import React, { useState, useEffect } from 'react';

import ThemeContext from './context';
import Routes from './Routes';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [header, setHeader] = useState({
    login: true,
    logout: false,
  });
  const [user, setUser] = useState({});

  useEffect(() => {
    async function arrUsers() {
      const respons = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await respons.json();
      setUsers(result);
    }
    arrUsers();
  }, []);
  return (
    <div className="App">
      <ThemeContext.Provider value={{ users, setUsers, header, setHeader, user, setUser }}>
        <Routes />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
