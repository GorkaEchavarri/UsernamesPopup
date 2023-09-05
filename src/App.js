import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UsersList';


function App() {

  const [usersList, setUsersList] = useState([])

  function AddUserHandler(uName, uAge) {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  };

  return (
    <div>
      <AddUser onSaveUserData={AddUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
