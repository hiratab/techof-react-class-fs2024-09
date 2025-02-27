import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import useUsers, { type UserDocumentType } from './useUsers';

import firebaseAuth from "../config/firebase-auth";
import { FirebaseError } from 'firebase/app';

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  auth_id: string;
}

function useAuth() {
  const { addUser } = useUsers();

  const signUp = async (newUser: UserType) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(firebaseAuth, newUser.email, newUser.password)

      const { user } = userCredential
      console.log('useAuth signUp user', user)

      const _newUser = { ...newUser, auth_id: user.uid } as UserDocumentType
      delete _newUser.password
      await addUser(_newUser)
      return _newUser

    } catch (error: any) {
      console.error(`${error.code}: ${error.message}`)
      // auth/email-already-in-use
      // auth/missing-email
      // auth/invalid-email
      // auth/missing-password
      //auth/weak-password
    }
  }
  
  const login = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password)

    const { user } = userCredential
    return user
  }

  const logout = async () => {
    await signOut(firebaseAuth)
  }

  return {
    signUp,
    login,
    logout
  }
}

export default useAuth
