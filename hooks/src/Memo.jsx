import { useState, useMemo } from "react";

function Memo() {
  function minhaFuncaoComplexa(n) {
    console.log('minhaFuncaoComplexa', n)
    return n * 100;
  }

  const [number, setNumber] = useState(0);

  const [x, setX] = useState(0);
  const [y, setY] = useState(minhaFuncaoComplexa(x))

  const valorArmazenado = useMemo(() => minhaFuncaoComplexa(number), [number]);

  return (
    <div>
      <p>Number: {number}</p>
      <p>ValorArmazenado: {valorArmazenado}</p>
      <p>X: {x}</p>
      <p>Y: {y}</p>
      <button
        onClick={() => {
          setNumber(previousNumber => previousNumber + 1);
        }}
      >
        Increment Number
      </button>
      <button
        onClick={() => {
          setX(previousNumber => previousNumber + 1);
        }}
      >
        Increment X
      </button>
    </div>
  )
}

export default Memo;