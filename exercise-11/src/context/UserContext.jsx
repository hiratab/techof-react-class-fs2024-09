import { useState, createContext } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 25
    }
  ]);

  return (
    <UserContext.Provider
      value={{ users, setUsers }}
    >
      {children}
    </UserContext.Provider>
  )
};

export default UserContext;
