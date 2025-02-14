import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, onSnapshot, query, deleteDoc, doc, where, updateDoc, DocumentData, QuerySnapshot } from 'firebase/firestore';
import db from '../config/firestore';

const USERS_COLLECTION_NAME = 'users';

export interface UserType extends DocumentData {
  age: number;
  auth_id: string;
  hasDog: boolean;
  name: string;
}

function useUsers() {
  const [users, setUsers] = useState<UserType[]>([]);

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

  const addUser = async (user: UserType) => {
    try {
      await addDoc(usersCollectionRef, user);
    } catch (error) {
      console.error('Fail to add user to users collection', user, error)
    }
  }

  const removeUser = async (user: UserType) => {
    try {
      console.log(`Removing user ${user.id} from collection ${USERS_COLLECTION_NAME}`);
      const docRef = doc(db, USERS_COLLECTION_NAME, user.id);

      await deleteDoc(docRef);

      console.log(`Removed user ${user.id} from collection ${USERS_COLLECTION_NAME}`);
    } catch (error) {
      console.error('Fail to remove user to users collection', user, error)
    }
  }

  const queryByName = async (name: string) => {
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

  async function updateUser(docId: string, data: UserType) {
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

  const parseQuerySnapshot = (querySnapshot: QuerySnapshot) => {
    const items: UserType[] = [];
    const _querySnapshot = querySnapshot as QuerySnapshot<UserType>
    _querySnapshot.forEach((doc) => {
      items.push({
        ...doc.data(),
        id: doc.id,
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
