import { useState, useEffect } from 'react';

import Flats from "./components/Flats";
import useFlats from './hooks/useFlats';

function App() {
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState(0);
  const {
    flats,
    addFlat
  } = useFlats();

  const handleAddFlat = () => {
    addFlat({
      address,
      price,
    });
    setAddress('');
    setPrice(0);
  };


  return (
    <div>
      <div>
        <input
          type="text"
          placeholder='Endereço do Flat'
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <input
          type='number'
          placeholder='Preço do aluguel'
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />

        <button
          onClick={handleAddFlat}
        >Add</button>
      </div>
      <Flats flats={flats} />
    </div>
  );
}

export default App;
