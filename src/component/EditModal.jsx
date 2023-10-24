import React, { useState } from 'react';
import { Modal, Button, Form } from 'semantic-ui-react';

function EditModal({ open, setOpen, formData, setFormData, handleEdit }) {
  const [editedData, setEditedData] = useState(formData);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(formData.id, editedData);
    setOpen(false); // Close the edit modal
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Modal.Header>Edit Data</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={editedData.age}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input
              type="text"
              name="salary"
              value={editedData.salary}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input
              type="text"
              name="hobby"
              value={editedData.hobby}
              onChange={handleInputChange}
            />
          </Form.Field>
          <Button type="submit" color="blue">
            Save Changes
          </Button>
          <Button onClick={() => setOpen(false)} color="red">
            Cancel
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default EditModal;
