import './AddUser.css';

function UserList(props) {

  return (
    <div className='card'>
      <ul>
      {props.users.map(user =>
        (<li key={user.id}>
          {user.name} ({user.age} years old.)
        </li>
        ))}
      </ul>
    </div>
  )
}


export default UserList;
