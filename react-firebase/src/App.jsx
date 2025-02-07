import { useState, useEffect } from 'react';
import Users from './components/Users';
import AddUser from './components/AddUser';

function App() {

  return (
    <div>
      <Users />
      <AddUser />
    </div>
  );
}

export default App;
