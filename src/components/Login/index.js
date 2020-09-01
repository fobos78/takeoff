import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import ThemeContext from '../../context';
import './Login.css';

function Login() {
  const history = useHistory();
  const {
    users, setUsers, header, setHeader, user, setUser,
  } = useContext(ThemeContext);
  const [todo, setTodo] = useState('');
  const [message, setMesasge] = useState('');
  function inputChange(event) {
    setTodo(event.target.value);
  }
  function checkUser() {
    const findUser = users.find((el) => el.username === todo);
    if (findUser) {
      setHeader({ ...header, login: false, logout: true });
      setUser(findUser);
      return history.push('/contacts');
    }
    setMesasge('Попробуйте еще раз');
    setTodo('');
  }
  return (
    <div className="Login">
      Введите Ник:
      <input onChange={inputChange} value={todo} />
      <button type="button" onClick={checkUser}>Войти</button>
      {message}
    </div>
  );
}

export default Login;
