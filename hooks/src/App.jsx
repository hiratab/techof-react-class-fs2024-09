import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  useEffect(() => {
    console.log('useEffect counter');
  }, [counter]);

  useEffect(() => {
    console.log('useEffect otherCounter');
  }, [otherCounter]);

  useEffect(() => {
    let interval = setInterval(() => {
      setCounter((previousValue) => previousValue + 1);
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <div>
        <p>Counter: {counter}</p>
        <button
          onClick={() => {
            setCounter((previousValue) => previousValue + 1);
          }}
        >
          +
        </button>
      </div>
      <div>
        <p>Outro Counter: {otherCounter}</p>
        <button
          onClick={() => {
            setOtherCounter((previousValue) => previousValue + 1);
          }}
        >
          Outro Counter +
        </button>
      </div>
    </div>
  );
}

export default App;
