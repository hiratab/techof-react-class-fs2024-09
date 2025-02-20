import BasePage from "./BasePage";
import useUsers from "../hooks/useUsers";
import type UserType from '../hooks/useUsers';

function Users() {
  const { users, } = useUsers();

  return (
    <BasePage>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <p>{user.firstName}</p>
            </div>
          )
        })
      }
    </BasePage>
  )
}

export default Users;
