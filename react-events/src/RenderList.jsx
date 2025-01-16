import { useState } from 'react';

const RenderList = () => {
  const [phone, setPhone] = useState('');
  const [phones, setPhones] = useState([
    '+351 910 12 3456',
    '+351 910 12 3457',
    // '+351 910 12 3458',
    // '+351 910 12 3459',
    // '+351 910 12 3460',
    // '+351 910 12 3461',
    // '+351 910 12 3462',
    // '+351 910 12 3463',
    // '+351 910 12 3464',
    // '+351 910 12 3465',
    // '+351 910 12 3466',
  ]);

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
          value={phone}
          placeholder='+XXX XXX XX XXXX'
          onChange={handlePhoneChange}
        />
        <p>Phone: {phone}</p>
      </div>

      <button
        onClick={() => {
          phones.push(phone);
          setPhone('')
        }}
      >
        Add Phone
      </button>

      <div>
        <ul>

          {phones.map(phone => {
            return <li
              key={phone}
            >{phone}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default RenderList;
