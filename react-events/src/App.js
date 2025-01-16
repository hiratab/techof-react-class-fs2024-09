import { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(false);

  const formatPhoneNumber = (value) => {
    const mask = '+XXX XXX XX XXXX';

    const digits = value.replace(/\D/g, '');

    let newPhoneNumber = '';
    let j = 0;
    for (let i = 0; i < mask.length && j < digits.length; i++) {
      if (mask[i] === 'X') {
        newPhoneNumber = newPhoneNumber + digits[j];
        j++;
      } else {
        newPhoneNumber = newPhoneNumber + mask[i];
      }
    }

    return newPhoneNumber;
  }

  const handlePhoneChange = (event) => {
    setPhone(formatPhoneNumber(event.target.value));
  }

  return (
    <div>
      <div>
        <input
          type='text'
          placeholder='Insert a text'
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <p>{text}</p>
      </div>

      <div>
        <input
          type='text'
          value={phone}
          placeholder='+XXX XXX XX XXXX'
          onChange={handlePhoneChange}
        />
        <p>Phone: {phone}</p>
      </div>

      <div>
        {
          // Ternary operator
          // if (error) { <p>Tem Erro</p> } else { <p>Não tem erro</p> }
          error ? <p>Tem Erro</p> : <p>Não tem erro</p>
        }
        {error && <p>Tem Erro - Short Circuit</p>}
        {!error && <p>Não tem erro - Short Circuit</p>}
        <button
          onClick={() => {
            setError(!error)
          }}
        >
          Error
        </button>
      </div>

    </div>
  );
}

export default App;
