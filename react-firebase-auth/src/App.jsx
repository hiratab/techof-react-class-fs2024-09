import { useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import auth from './config/firebase-auth';
import './App.css';



function App() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  onAuthStateChanged(auth, (_user) => {
    if (_user) {
      console.log(`_User sign in:`, _user);
      setUser({
        email: _user.email,
        accessToken: _user.accessToken,
        id: _user.uid
      });
    } else {
      console.log('No user is signed in');
    }
  }
);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setHasError(false);
      setErrorMessage('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [hasError, errorMessage]);

  const handleLogin = async () => {
    const email = 'b@b.com';
    const password = '123456';

    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage('');
      setUser({});

      if ('' === email || '' === password) {
        throw new Error('Empty credentials');
      }

      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.code);
      setHasError(true);

      setErrorMessage('An error occurred. Please, try again.');
      if ('auth/invalid-credential' === error.code) {
        setErrorMessage('Credentials are invalid. Please, try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser({});
    } catch (error) {
      console.log(`${error.code}: ${error.message}`);
    }
  };

  const handleCreateUser = async () => {
    const email = 'ab@b.com';
    const password = '123456';

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {(!isLoading && !user.email) && <div>
        <button
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          onClick={handleCreateUser}
        >
          Create User
        </button>
      </div>}

      {user.email && <div>
        <button
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>}

      {hasError && <p>{errorMessage}</p>}

      {user.email && <div>
        <p>Email: {user.email}</p>
        <p>ID: {user.id}</p>
        <p>Access Token: {user.accessToken}</p>
      </div>}
    </div>
  );
}

export default App;
