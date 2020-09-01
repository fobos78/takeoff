import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Search from '../Search';
import ThemeContext from '../../context';
import './Header.css';

function Header() {
  const [todo, setTodo] = useState('');
  const [searchUser, setSearchUser] = useState('');
  const [message, setMesasge] = useState('');
  const {
    users, setUsers, header, setHeader, user, setUser,
  } = useContext(ThemeContext);
  function inputChange(event) {
    setTodo(event.target.value);
  }
  function findContactsUser() {
    console.log('searchUser>>>', searchUser);
    console.log('todo>>>', todo);
    const findUser = users.find((el) => el.name === todo);
    setSearchUser(findUser);
    console.log('findUser>>>', findUser);
    console.log('searchUser>>>', searchUser);
  }
  return (
    <>
      <div className="Header">
        {header.logout && (
        <div>
          <input onChange={inputChange} value={todo} />
          <button type="button" onClick={findContactsUser}>Поиск</button>
        </div>
        )}
        <Link to="/">Home</Link>
        {header.logout && <Link to="/contacts">Contacts</Link>}
        {header.login && <Link to="/login">Login</Link>}
        {header.logout && <Link to="/logout">Logout</Link>}
      </div>
      {searchUser && <Search searchUser={searchUser} setSearchUser={setSearchUser} />}
    </>
  );
}

export default Header;
