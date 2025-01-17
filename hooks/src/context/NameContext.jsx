import { createContext, useState } from "react";

const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [name, setName] = useState('Name do Provider');

  return (
  <NameContext.Provider
    value={{
      name,
      setName
    }}
  >
    { children }
  </NameContext.Provider>
  )
}

export default NameContext;
