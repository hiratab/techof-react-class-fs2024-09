import { useState, useEffect } from 'react';

import {
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';

import { storageRef } from './config/firebase-storage';

import './App.css';

const getImageUrl = async (imageName) => {
  const imageRef = ref(storageRef, imageName);
  const imageUrl = await getDownloadURL(imageRef);
  return imageUrl;
}

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [file, setFile] = useState('');
  const [imageName, setImageName] = useState('luffy.svg');

  useEffect(() => {
    getImageUrl(imageName).then((url) => setImageUrl(url));
  }, [imageName]);

  const uploadImage = async () => {
    const imageRef = ref(storageRef, file.name);
    await uploadBytes(imageRef, file);
    setImageName(file.name);
    console.log('Image uploaded successfully');
  }

  return (
    <div>
      {imageUrl === '' ?
        <img src='https://firebasestorage.googleapis.com/v0/b/fs-2024-b7991.appspot.com/o/load-37_128.gif?alt=media&token=29cc9b74-2ded-4368-bd66-7c5a4ef21de9' />
        : <img width={"100px"} src={imageUrl} />
      }
      <div>
        <input
          type='file'
          onChange={(event) => {
            setFile(event.target.files[0])
          }}
        />
        <button
          onClick={uploadImage}
        >
          Upload Image
        </button>
      </div>
    </div>
  );
}

export default App;
