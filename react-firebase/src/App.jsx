import { useState, useEffect } from 'react';
import Users from './components/Users';
import AddUser from './components/AddUser';
import Search from './components/Search';

function App() {

  return (
    <div>
      <Users />
      <AddUser />
      <Search />
    </div>
  );
}

export default App;
