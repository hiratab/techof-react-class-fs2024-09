import { useCallback, useMemo, useState } from "react";

function Callback() {
  const [count, setCount] = useState(0);

  const calculateSum = (num) => {
    let sum = 0;

    for (let i = 0; i <= num; i++) {
      sum = sum + i;
    }

    return sum;
  }

  const sum = useMemo(() => calculateSum(count), [count])
  const sumDoCallback = useCallback(() => calculateSum(count), [count])

  return (
    <div>
      <p>Count: {count}</p>
      <p>Somatoria: {sum}</p>
      <p>Somatoria do useCallback: {sumDoCallback()}</p>
      <button
        onClick={() => {
          setCount(previousCount => previousCount + 1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default Callback;