import { useContext } from "react";

import UserContext, { UserContextProvider} from "./context/UserContext";

function UserData(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}

function UsersData() {
  const { users } = useContext(UserContext);

  return (
    users.map(user => <UserData key={user.email} {...user} />)
  )
}

function UserDisplay() {
  return (
    <div>
      <h1>User Data</h1>
      <UsersData />
    </div>
  )
}

function App() {
  return (
    <UserContextProvider>
      <UserDisplay />
    </UserContextProvider>
  );
}

export default App;
