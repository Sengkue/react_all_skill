import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import { FaSpinner } from "react-icons/fa";

function UploadModal({ open, onClose, onUpload, isLoading }) {
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImageFile(selectedFile);
  };

  const handleUpload = () => {
    if (!imageFile) {
      alert("Please select an image to upload.");
      return;
    }

    onUpload(imageFile);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Modal.Header>Upload Image</Modal.Header>
      <Modal.Content>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleUpload} disabled={isLoading}>
          {isLoading ? <FaSpinner className="icon-spin" /> : "Upload"}
        </Button>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default UploadModal;
