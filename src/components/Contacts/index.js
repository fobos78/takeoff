import React, { useContext, useState } from 'react';

import ThemeContext from '../../context';
import './Contacts.css';

function Contacts() {
  const { users, setUsers } = useContext(ThemeContext);
  const [usersContacts, setUserContacts] = useState(users);
  const [modal, setModal] = useState(false);
  const [update, setUpdate] = useState(false);
  const [chengeName, setChengeName] = useState('');
  const [chengePhone, setChengePhone] = useState('');
  const [chengeEmail, setChengeEmail] = useState('');
  const [modalUser, setModalUser] = useState({});
  function choiceUser(id) {
    const findUser = usersContacts.find((el) => el.id === id);
    setModalUser(findUser);
    setModal(true);
  }
  function closeUser() {
    setModal(false);
  }
  function delUser() {
    setModal(false);
    const findUsers = users.filter((el) => el.id !== modalUser.id);
    setUsers(findUsers);
    setUserContacts(findUsers);
  }
  function updateUser() {
    setModal(false);
    setUpdate(true);
    setChengeName(modalUser.name);
    setChengePhone(modalUser.phone);
    setChengeEmail(modalUser.email);
  }
  function inputChangeName(event) {
    setChengeName(event.target.value);
  }
  function inputChangePhone(event) {
    setChengePhone(event.target.value);
  }
  function inputChangeEmail(event) {
    setChengeEmail(event.target.value);
  }
  function updateNameOkUser() {
    setModal(false);
    setUpdate(false);
    const findUsers = usersContacts.find((el) => el.id === modalUser.id);
    const arr = usersContacts.filter((el) => el.id !== modalUser.id);
    arr.push({ ...findUsers, name: chengeName });
    setUsers(arr);
    setUserContacts(arr);
  }
  function updatePhoneOkUser() {
    setModal(false);
    setUpdate(false);
    const findUsers = usersContacts.find((el) => el.id === modalUser.id);
    const arr = usersContacts.filter((el) => el.id !== modalUser.id);
    arr.push({ ...findUsers, phone: chengePhone });
    setUsers(arr);
    setUserContacts(arr);
  }
  function updateEmailOkUser() {
    setModal(false);
    setUpdate(false);
    const findUsers = usersContacts.find((el) => el.id === modalUser.id);
    const arr = usersContacts.filter((el) => el.id !== modalUser.id);
    arr.push({ ...findUsers, email: chengeEmail });
    setUsers(arr);
    setUserContacts(arr);
  }

  return (
    <>
      {
        update && (
          <div className="modal">
            <div className="chenge">
              Изменить имя:
              <input onChange={inputChangeName} value={chengeName} />
              <button type="button" onClick={updateNameOkUser}>Изменить</button>
            </div>
            <div className="chenge">
              Изменить телефон:
              <input onChange={inputChangePhone} value={chengePhone} />
              <button type="button" onClick={updatePhoneOkUser}>Изменить</button>
            </div>
            <div className="chenge">
              Изменить почту:
              <input onChange={inputChangeEmail} value={chengeEmail} />
              <button type="button" onClick={updateEmailOkUser}>Изменить</button>
            </div>
          </div>
        )
      }
      {
        modal && (
          <div className="modal">
            <h4>Подробная информация</h4>
            <h5>Имя -{' '}{modalUser.name}</h5>
            <h6>Тел -{' '}{modalUser.phone}</h6>
            <h6>Почта -{' '}{modalUser.email}</h6>
            <button type="button" onClick={() => { delUser(); }}>Удалить</button>
            <button type="button" onClick={() => { updateUser(); }}>Редактировать</button>
            <button type="button" onClick={() => { closeUser(); }}>Закрыть</button>
          </div>
        )
      }
      <div className="Contacts">
        {
          usersContacts[0] && usersContacts.map((el) => (
            <div key={el.id} className="user">
              <h5>{el.name}</h5>
              <h6>{el.phone}</h6>
              <button type="button" onClick={() => { choiceUser(el.id); }}>Подробнее</button>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Contacts;
