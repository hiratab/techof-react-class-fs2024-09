import { useState, useEffect, useRef } from "react";
import useUsers from "../hooks/useUsers";
import User from "./User";

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const { queryByName, updateUser } = useUsers();

  const nameRef = useRef();
  const ageRef = useRef();
  const hasDogRef = useRef();
  const idRef = useRef();

  const handleSearch = async () => {
    const _users = await queryByName(searchTerm);
    setUsers(_users);
  }

  const handleUpdate = async () => {
    const dataToBeUpdate = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      hasDog: hasDogRef.current.checked,
    }

    const id = idRef.current.value;
    await updateUser(id, dataToBeUpdate);

  }

  useEffect(() => {
    console.log('Search Term', searchTerm)
    const interval = setTimeout(async () => {
      await handleSearch();
      console.log('Handle Search Term', searchTerm)
    }, 1000);

    return () => clearInterval(interval);
  }, [searchTerm]);

  return (
    <div>
      <h1>Search User</h1>
      <input
        type="text"
        placeholder="Search Users"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        onClick={handleSearch}
      >
        Search
      </button>

      <div>
        {users.map(user => {
          return (
            <div>
              <input
                type='text'
                defaultValue = {user.id}
                disabled = {true}
                ref = {idRef}
              />
              <input
                type='text'
                defaultValue = {user.name}
                ref = {nameRef}
              />
              <br />
              <input 
                type = 'text'
                defaultValue = {user.age}
                ref = {ageRef}
              />
              <br />
              <input 
                type = 'checkbox'
                defaultChecked = {user.hasDog}
                ref = {hasDogRef}
              />
              <br />
              <button
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Search;
