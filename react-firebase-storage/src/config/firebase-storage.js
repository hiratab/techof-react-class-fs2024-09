import { getStorage, ref } from 'firebase/storage';
// import firebase from 'firebase/app'
import firebase from './firebase';

const storage = getStorage(firebase, 'gs://fs-2024-b7991.appspot.com');
const storageRef = ref(storage);

export {
  storage,
  storageRef
};
