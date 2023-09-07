import React from 'react';
import './ErrorModal.css';

function ErrorModal(props) {
  return <div>
    <div className='backdrop' onClick={props.onConfirm}/>
  <div className='modal'>
    <header className='header'>
      <h2>{props.title}</h2>
    </header>

    <div className='content'>
      <p>{props.message}</p>
    </div>

    <footer className='actions'>
    <button onClick={props.onConfirm} className="button">Cancel</button>
    </footer>

  </div>
  </div>
}

export default ErrorModal;
