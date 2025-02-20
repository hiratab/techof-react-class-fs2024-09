import { User, onAuthStateChanged } from 'firebase/auth'
import { createContext, PropsWithChildren, useState } from 'react'

import firebaseAuth from '../config/firebase-auth';
import useUsers, { type UserDocumentType }  from '../hooks/useUsers';
import useAuth from '../hooks/useAuth';

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  auth_id: string;
  accessToken?: string;
}

interface SignUpUserType extends UserType {
  password: string;
}

export const AuthContext = createContext<{
  currentUser: UserType,
  hasLoggedInUser: boolean,
  login: (email: string, password: string) => Promise<User>,
  logout: () => Promise<void>,
  signUp: (user: SignUpUserType) => Promise<UserDocumentType | undefined>
}>({
  currentUser: {
    firstName: '',
    lastName: '',
    email: '',
    auth_id: '',
  } as UserType,
  hasLoggedInUser: false,
  login: (email: string, password: string) => Promise.resolve({} as User),
  logout: () => Promise.resolve(),
  signUp: (user: SignUpUserType) => Promise.resolve(({
    firstName: '',
    lastName: '',
    email: '',
    auth_id: '',
  } as UserType)),
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const { queryByAuthId } = useUsers()
  const { login, logout, signUp } = useAuth()

  const [currentUser, setCurrentUser] = useState<UserType>({
    firstName: '',
    lastName: '',
    email: '',
    auth_id: '',
    accessToken: '',
  })
  const [hasLoggedInUser, setHasLoggedInUser] = useState(false);

  onAuthStateChanged(firebaseAuth, async (_user) => {
    if (_user) {
      console.log(`_User sign in:`, _user)
      const [user] = await queryByAuthId(_user.uid)
      console.log(`User found:`, user)
      setCurrentUser(user as UserType)
      setHasLoggedInUser(true)
    } else {
      console.log('No user is signed in')
      setCurrentUser({
        firstName: '',
        lastName: '',
        email: '',
        auth_id: '',
        accessToken: '',
      })
      setHasLoggedInUser(false)
    }
  })

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        hasLoggedInUser,
        login,
        logout,
        signUp,
    }}
    >
      {children}
    </AuthContext.Provider >
  )
}
