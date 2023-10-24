import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";
import { FaSpinner } from "react-icons/fa"; // Import the FaSpinner icon

function AddModal({
  showModal,
  onClose,
  newItem,
  handleInputChange,
  handleAddItem,
  isLoading,
}) {
  return (
    <Modal open={showModal} onClose={onClose}>
      <Modal.Header>Add New Item</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Image URL"
            name="imageUrl"
            value={newItem.imageUrl}
            onChange={handleInputChange}
          />
          <Form.Input
            label="Title"
            name="title"
            value={newItem.title}
            onChange={handleInputChange}
          />
          <Form.Input
            type="datetime-local"
            label="Date and Time"
            name="dateTime"
            value={newItem.dateTime}
            onChange={handleInputChange}
          />
          <Form.TextArea
            label="Description"
            name="description"
            value={newItem.description}
            onChange={handleInputChange}
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleAddItem} disabled={isLoading}>
          {isLoading ? <FaSpinner className="icon-spin" /> : "Add"}{" "}
          {/* Use the loading spinner */}
        </Button>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default AddModal;
