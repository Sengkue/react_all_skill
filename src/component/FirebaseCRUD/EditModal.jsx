import React from "react";
import { Modal, Form, Button } from "semantic-ui-react";

function EditModal({
  showModal,
  onClose,
  editItem,
  handleInputChange,
  handleEditItem,
  isLoading,
}) {
  return (
    <Modal open={showModal} onClose={onClose}>
      <Modal.Header>Edit Item</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Input
            label="Image URL"
            name="imageUrl"
            value={editItem.imageUrl}
            onChange={handleInputChange}
          />
          <Form.Input
            label="Title"
            name="title"
            value={editItem.title} // Use the editItem for initial value
            onChange={handleInputChange} // Use the prop here
          />
          <Form.Input
            type="datetime-local"
            label="Date and Time"
            name="dateTime"
            value={editItem.dateTime} // Use the editItem for initial value
            onChange={handleInputChange} // Use the prop here
          />
          <Form.TextArea
            label="Description"
            name="description"
            value={editItem.description} // Use the editItem for initial value
            onChange={handleInputChange} // Use the prop here
          />
        </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button primary onClick={handleEditItem}>
          {isLoading ? "Saving..." : "Save"}
        </Button>
        <Button onClick={onClose}>Close</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default EditModal;
