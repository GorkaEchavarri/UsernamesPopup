import React, { useState } from 'react';
import './AddUser.css';

function AddUser(props) {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  function NameSubmitHandler(event) {
    setEnteredUsername(event.target.value)
  };

  function AgeSubmitHandler(event) {
    setEnteredAge(event.target.value)
  };
  function addUserHandler(event) {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return console.log('Fields are empty.')}
    if (+enteredAge < 1) {
      return console.log('Please enter a valid number.')}

    props.onSaveUserData({username: enteredUsername, age: enteredAge})
    setEnteredUsername('')
    setEnteredAge('')
  }

  return (
    <div className='card'>
      <form className="form" onSubmit={addUserHandler}>
      <div>
        <p>
          <label htmlFor='username'>Username</label>
          <br></br>
          <input type="text" value={enteredUsername} id="username" onChange={NameSubmitHandler}/>
        </p>
        <p>
          <label htmlFor='age'>Age (Years)</label>
          <br></br>
          <input type="number" value={enteredAge} id="age" onChange={AgeSubmitHandler}/>
        </p>
      </div>
      <p>
        <button type="submit" className="button">Add User</button>
      </p>
      </form>
    </div>
  )
}

export default AddUser;
