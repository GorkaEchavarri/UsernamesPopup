import React, { useState } from 'react';
import './AddUser.css';
import ErrorModal from './ErrorModal';

function AddUser(props) {

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError ] = useState()

  function NameSubmitHandler(event) {
    setEnteredUsername(event.target.value)
  };

  function AgeSubmitHandler(event) {
    setEnteredAge(event.target.value)
  };
  function addUserHandler(event) {
    event.preventDefault()
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age'
      })
      return console.log('Fields are empty.')}
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Please enter a valid age'
      })
      return console.log('Please enter a valid number.')}

    props.onSaveUserData(enteredUsername, enteredAge)
    setEnteredUsername('')
    setEnteredAge('')
  }

  function errorHandler() {
    setError(null)
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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
    </div>
  )
}

export default AddUser;
