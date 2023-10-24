import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function Upload() {
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  // Handle file input change
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Handle file upload
  const handleFileUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    // Create a reference to Firebase Storage
    const storage = getStorage();

    // Create a reference to the storage location (folder) in Firebase Storage
    const storageRef = ref(storage, 'images/' + file.name);

    // Upload the file
    await uploadBytes(storageRef, file).then((snapshot) => {
      console.log('File uploaded successfully!', snapshot);

      // Get the download URL for the uploaded file
      getDownloadURL(storageRef).then((url) => {
        console.log('show url image', url)
        setImageURL(url);
      });
    }).catch((error) => {
      console.error('Error uploading file:', error);
    });
  };

  return (
    <div>
      <h2>Upload an Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload Image</button>
      {imageURL && <img src={imageURL} alt="Uploaded" />}
    </div>
  );
}

export default Upload;
