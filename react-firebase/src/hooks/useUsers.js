import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import db from '../config/firestore';

function useUsers() {
  const [users, setUsers] = useState([]);
  
    const usersCollectionRef = collection(db, 'users');
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      console.log('getUsers', data);
      setUsers(
        data?.docs.map(
          (doc) => ({
            ...doc.data(),
            id: doc.id
          })
        )
      );
    }
  
    useEffect(() => {
      getUsers();
    }, []);

    const addUser = async (user) => {
      try {
        await addDoc(usersCollectionRef, user);
        await getUsers();
      } catch(error) {
        console.error('Fail to add user to users collection', user, error)
      }
    }

  return [users, setUsers, addUser];
}

export default useUsers;
