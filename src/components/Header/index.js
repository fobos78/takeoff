import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from '../../context';
import './Header.css';

function App() {
  const [todo, setTodo] = useState('');
  const [message, setMesasge] = useState('');
  const { users, setUsers, header, setHeader, user, setUser } = useContext(ThemeContext);
  function inputChange(event) {
    setTodo(event.target.value);
  }
  function checkUser() {
    const findUser = users.find((el) => el.username === todo);
    if (findUser) {
      setHeader({ ...header, login: false, logout: true });
      setUser(findUser);
      // return history.push('/contacts');
    } else {
      setMesasge('Попробуйте еще раз');
      setTodo('');
    }
  }
  return (
    <div className="Header">
      {header.logout && <div>
        <input onChange={inputChange} value={todo} />
        <button type="button" onClick={checkUser}>Поиск</button>
      </div>}
      <Link to="/">Home</Link>
      {/* {header.logout && <Link to="/contacts">Contacts</Link>} */}
      {header.logout && <Link to="/contacts">Contacts</Link>}
      {header.login && <Link to="/login">Login</Link>}
      {header.logout && <Link to="/logout">Logout</Link>}
    </div>
  );
}

export default App;
