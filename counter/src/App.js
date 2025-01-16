import { useState } from 'react';

import Button from './components/Button';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Counter</h3>
      <p>{counter}</p>

      <div>
        <Button
          label="-"
          onClick={() => {
            setCounter((previousValue) => previousValue - 1)
          }}
          />
        <Button
          label="+"
          onClick={() => {
            setCounter((previousValue) => previousValue + 1)
          }}
        />
      </div>
    </div>
  );
}

export default App;
