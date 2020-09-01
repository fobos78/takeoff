import React from 'react';

import './Search.css';

function Search({ searchUser, setSearchUser }) {
  function closeUser() {
    setSearchUser('');
  }

  return (
    <>
      {
        searchUser && (
          <div className="modal">
            <h4>Подробная информация</h4>
            <h5>Имя -{' '}{searchUser.name}</h5>
            <h6>Тел -{' '}{searchUser.phone}</h6>
            <h6>Почта -{' '}{searchUser.email}</h6>

            <button type="button" onClick={() => { closeUser(); }}>Закрыть</button>
          </div>
        )
      }
    </>
  );
}

export default Search;
