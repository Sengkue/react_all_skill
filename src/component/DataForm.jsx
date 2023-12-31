import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "semantic-ui-react";
import EditModal from "./FirebaseCRUD/EditModal";
import DeleteModal from "./FirebaseCRUD/DeleteModal";
import AddModal from "./FirebaseCRUD/AddModal";
import { toast } from "react-toastify";


function DataForm() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [editItem, setEditItem] = useState({});
  const [deleteItemId, setDeleteItemId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("https://xeebkwmvaj-3e3ec-default-rtdb.firebaseio.com/notes.json")
      .then((response) => {
        const fetchedData = response.data;
        const dataArr = [];
  
        for (let key in fetchedData) {
          dataArr.push({ id: key, ...fetchedData[key] });
        }
  
        setData(dataArr);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };
  
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenEditModal = (item) => {
    setEditItem(item);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
  };

  const handleOpenDeleteModal = (itemId) => {
    setDeleteItemId(itemId);
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteItemId("");
    setShowDeleteModal(false);
  };
  const handleEditInputChange = (e, { name, value }) => {
    setEditItem({ ...editItem, [name]: value });
  };
  const handleEditItem = () => {
    setIsLoading(true);

    axios
      .put(
        `https://xeebkwmvaj-3e3ec-default-rtdb.firebaseio.com/notes/${editItem.id}.json`,
        editItem
      )
      .then(() => {
        const updatedData = data.map((item) =>
          item.id === editItem.id ? editItem : item
        );
        setData(updatedData);
        setShowEditModal(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error updating data to Firebase:", error);
        setIsLoading(false);
      });
  };

  const handleDeleteItem = () => {
    setIsLoading(true);

    axios
      .delete(
        `https://xeebkwmvaj-3e3ec-default-rtdb.firebaseio.com/notes/${deleteItemId}.json`
      )
      .then(() => {
        const updatedData = data.filter((item) => item.id !== deleteItemId);
        setData(updatedData);
        setDeleteItemId("");
        setShowDeleteModal(false);
        setIsLoading(false);
        toast.success(<strong>Item deleted successfully</strong>);
      })
      .catch((error) => {
        console.error("Error deleting data from Firebase:", error);
        setIsLoading(false);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Button primary onClick={handleOpenModal}>
        Add Item
      </Button>

      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Image</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>DateTime</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item, index) => (
            <Table.Row key={item.id}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>
                <img style={{borderRadius: "10%"}} src={item.imageUrl} alt={item.title} width={80} height={80}/>
              </Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.dateTime}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleOpenEditModal(item)}>Edit</Button>
                <Button onClick={() => handleOpenDeleteModal(item.id)}>
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <AddModal showModal={showModal} onClose={handleCloseModal} fetchData={fetchData} />

      <EditModal
        showModal={showEditModal}
        onClose={handleCloseEditModal}
        editItem={editItem}
        handleInputChange={handleEditInputChange}
        handleEditItem={handleEditItem}
        isLoading={isLoading}
      />

      <DeleteModal
        showModal={showDeleteModal}
        onClose={handleCloseDeleteModal}
        onDeleteItem={handleDeleteItem}
        isLoading={isLoading}
      />
    </div>
  );
}

export default DataForm;
