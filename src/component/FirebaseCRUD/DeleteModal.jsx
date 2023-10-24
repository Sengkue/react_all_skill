import React from 'react';
import { Modal, Button } from 'semantic-ui-react';

function DeleteModal({ showModal, onClose, onDeleteItem }) {
  return (
    <Modal open={showModal} onClose={onClose}>
      <Modal.Header>Delete Item</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this item?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button negative onClick={onDeleteItem}>
          Delete
        </Button>
        <Button onClick={onClose}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default DeleteModal;
