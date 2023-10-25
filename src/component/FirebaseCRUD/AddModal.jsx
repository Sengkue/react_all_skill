import React, { useState } from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Import storage related functions
import axios from "axios";
import UploadModal from "./UploadModal"; // Import the new component

function AddModal({ showModal, onClose, isLoading, fetchData }) {
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [newItem, setNewItem] = useState({
    title: "",
    description: "",
    dateTime: "",
  });

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, "images/" + file.name);

    await uploadBytes(storageRef, file)
      .then((snapshot) => {
        console.log("File uploaded successfully!", snapshot);

        getDownloadURL(storageRef)
          .then((url) => {
            console.log("Uploaded image URL:", url);
            toast.success(
              <div style={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center" }}>
                <img style={{borderRadius: "50%", marginRight: "5px"}} src={url} alt={file.name} width={60} height={60} />
                <strong>Upload successfully</strong>
              </div>
            );

            setImageUrl(url);
            setUploadModalOpen(false);
          })
          .catch((error) => {
            console.error("Error getting download URL:", error);
          });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const handleAdd = () => {
    // Prepare the data for the POST request
    const postData = {
      title: newItem.title,
      description: newItem.description,
      dateTime: newItem.dateTime,
      imageUrl: imageUrl,
    };

    // Send the POST request to your Firebase API
    axios
      .post(
        "https://xeebkwmvaj-3e3ec-default-rtdb.firebaseio.com/notes.json",
        postData
      )
      .then((response) => {
        // Handle the response here if needed
        console.log("Item added successfully", response.data);
        toast.success(<strong>Item added successfully</strong>);
        setNewItem({ title: "", description: "", dateTime: "" });
        setImageUrl("");
        onClose(); // Close the modal
        fetchData();
      })
      .catch((error) => {
        console.error("Error adding item:", error);
      });
  };

  return (
    <Modal open={showModal} onClose={onClose}>
      <Modal.Header>Add New Item</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Image URL"
            name="imageUrl"
            value={imageUrl}
            onChange={(e, { value }) => setImageUrl(value)}
          />
          <Button primary onClick={() => setUploadModalOpen(true)}>
            Upload Image
          </Button>
          <Form.Input
            label="Title"
            name="title"
            value={newItem.title}
            onChange={(e, { value }) =>
              setNewItem({ ...newItem, title: value })
            }
          />
          <Form.Input
            type="datetime-local"
            label="Date and Time"
            name="dateTime"
            value={newItem.dateTime}
            onChange={(e, { value }) =>
              setNewItem({ ...newItem, dateTime: value })
            }
          />
          <Form.TextArea
            label="Description"
            name="description"
            value={newItem.description}
            onChange={(e, { value }) =>
              setNewItem({ ...newItem, description: value })
            }
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleAdd} disabled={isLoading}>
          {isLoading ? <FaSpinner className="icon-spin" /> : "Add"}
        </Button>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>

      <UploadModal
        isOpen={uploadModalOpen}
        onClose={() => setUploadModalOpen(false)}
        onFileUpload={handleFileUpload}
        isLoading={isLoading}
        handleImageChange={handleImageChange}
      />
    </Modal>
  );
}

export default AddModal;
