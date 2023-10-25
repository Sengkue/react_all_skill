// UploadModal.jsx

// import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import { FaSpinner } from "react-icons/fa";

function UploadModal({ isOpen, onClose, onFileUpload, isLoading, handleImageChange }) {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Modal.Header>Upload Image</Modal.Header>
      <Modal.Content>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={onFileUpload} disabled={isLoading}>
          {isLoading ? <FaSpinner className="icon-spin" /> : "Upload Image"}
        </Button>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default UploadModal;
