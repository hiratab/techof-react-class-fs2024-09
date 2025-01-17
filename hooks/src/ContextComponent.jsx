import { useContext, useState } from "react";

import NameContext, { NameProvider } from "./context/NameContext";

function Component3(props) {
  const context = useContext(NameContext);

  return (
    <span>{context.name}</span>
  )
}

function Component2(props) {
  return (
    <p>Component2 <Component3 /></p>
  )
}

function Component1(props) {
  return (
    <div>
      <Component2 />
    </div>
  )
}


function ContextComponent(props) {
  const [name, setName] = useState('Name Do Context');

  return (
    <NameProvider>
      <div>
        <Component1 />
      </div>
    </NameProvider>
  )
}

export default ContextComponent;