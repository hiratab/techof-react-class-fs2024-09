import useUsers from "../hooks/useUsers";
import User from './User';

function Users() {
  const [users, setUsers] = useUsers();
  console.log('Users', users);

  return (
    <div>
      <h1>Users</h1>
      {
        users.map(
          user => <User key={user.id} {...user} />
        )
      }
    </div>
  )
}

export default Users;
