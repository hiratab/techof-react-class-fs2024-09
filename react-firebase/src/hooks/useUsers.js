import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, onSnapshot, query, deleteDoc, doc, where, updateDoc } from 'firebase/firestore';
import db from '../config/firestore';

const USERS_COLLECTION_NAME = 'users';

function useUsers() {
  const [users, setUsers] = useState([]);

  const usersCollectionRef = collection(db, USERS_COLLECTION_NAME);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(usersCollectionRef),
      (querySnapshot) => {
        setUsers(parseQuerySnapshot(querySnapshot));
      }
    );

    return () => {
      unsubscribe();
    }
  }, []);

  const addUser = async (user) => {
    try {
      await addDoc(usersCollectionRef, user);
    } catch (error) {
      console.error('Fail to add user to users collection', user, error)
    }
  }

  const removeUser = async (user) => {
    try {
      console.log(`Removing user ${user.id} from collection ${USERS_COLLECTION_NAME}`);
      const docRef = doc(db, USERS_COLLECTION_NAME, user.id);

      await deleteDoc(docRef);

      console.log(`Removed user ${user.id} from collection ${USERS_COLLECTION_NAME}`);
    } catch (error) {
      console.error('Fail to remove user to users collection', user, error)
    }
  }

  const queryByName = async (name) => {
    try {
      console.log(`Querying user ${name} from collection ${USERS_COLLECTION_NAME}`);

      const _query = query(usersCollectionRef, where('name', '==', name));
      const querySnapshot = await getDocs(_query);
      const items = parseQuerySnapshot(querySnapshot);

      console.log(`User with name ${name} from collection ${USERS_COLLECTION_NAME}`, items);
      return items;
    } catch (error) {
      console.error('Fail to remove user to users collection', name, error);
      return [];
    }
  }

  async function updateUser(docId, data) {
    try {
      console.log(`Updating document docId: ${docId} with data ${data}`);

      const docRef = doc(db, USERS_COLLECTION_NAME, docId); 
      const updatedData = {
        name: data.name,
        age: data.age,
        hasDog: data.hasDog,
      }
      await updateDoc(docRef, updatedData);

      console.log(`Updated document docId: ${docId} with data ${data}`);
    } catch (error) {
      console.error(`Fail to update document ${docId}`);
    }
  }

  const parseQuerySnapshot = (querySnapshot) => {
    const items = [];
    querySnapshot.forEach((doc) => {
      items.push({
        ...doc.data(),
        id: doc.id
      })
    });
    return items;
  }

  return {
    users,
    setUsers,
    addUser,
    removeUser,
    queryByName,
    updateUser,
  };
}

export default useUsers;
