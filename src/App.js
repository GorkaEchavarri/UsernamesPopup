import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UsersList';


function App() {

  const [usersList, setUsersList] = useState([])

  function AddUserHandler(user) {
    setUsersList((prevUsers) => {
      return [user, ...prevUsers]
    })
    console.log(usersList)
  };

  return (
    <div>
      <AddUser onSaveUserData={AddUserHandler}/>
      <UserList />
    </div>
  );
}

export default App;
