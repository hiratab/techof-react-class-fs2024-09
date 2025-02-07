import { useState } from 'react';
import useUsers from '../hooks/useUsers';

function AddUser() {
  const [users, setUsers, addUser] = useUsers();
  const [newUser, setNewUser] = useState({
    name: '',
    age: 0,
    hasDog: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(newUser);
    setNewUser({
      name: '',
      age: 0,
      hasDog: false,
    });
  }

  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Name'
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <br />
        <input
          name='age'
          type='number'
          placeholder='Age'
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
        />
        <br />
        <input
          name='hasDog'
          type='checkbox'
          checked={newUser.hasDog}
          onChange={(e) => setNewUser({ ...newUser, hasDog: e.target.checked })}
        />
        <br />
        <button
          type='submit'
        >
          Add user
        </button>
      </form>
    </div>
  )
}

export default AddUser;