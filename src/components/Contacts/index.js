import React, { useContext, useState } from 'react';

import ThemeContext from '../../context';
import './Contacts.css';

function Contacts() {
  const { users, setUsers } = useContext(ThemeContext);
  const [usersContacts, setUserContacts] = useState(users);
  const [modal, setModal] = useState(false);
  const [modalUser, setModalUser] = useState({});
  function choiceUser(id) {
    const findUser = usersContacts.find((el) => el.id === id);
    setModalUser(findUser);
    setModal(true);
  }
  function closeUser() {
    setModal(false);
  }

  return (
    <>
      {
        modal && (
          <div className="modal">
            <h5>{modalUser.name}</h5>
            <h6>{modalUser.phone}</h6>
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
