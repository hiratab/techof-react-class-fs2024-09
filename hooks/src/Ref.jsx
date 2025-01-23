import { useRef, useState } from "react";

function Ref() {
  const [name, setName] = useState('');
  const nameInputRef = useRef('');
  let ageRef = useRef(0);

  return (
    <div>
      <p>Name: {name}</p>
      <div>
        <input
          type="text"
          ref={nameInputRef}
        />
      </div>
      <div>
        <button
          onClick={() => {
            nameInputRef.current.focus()
          }}
        >
          Focus
        </button>
        <button
          onClick={() => {
            setName(nameInputRef.current.value)
          }}
        >
          Submit
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            ageRef = { ...ageRef, current: ageRef.current + 1}
            console.log('ageRef', ageRef)
          }}
        >
          Age +
        </button>
      </div>
    </div>
  )
}

export default Ref;
