import useUsers from "../hooks/useUsers";
import User from './User';

function Users() {
  const { users, setUsers } = useUsers();

  return (
    <div>
      <h1>Users</h1>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {
          users.map(
            user => <User key={user.id} {...user} />
          )
        }
      </div>
    </div>
  )
}

export default Users;
