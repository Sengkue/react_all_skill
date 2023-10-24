import React, { useState, useEffect } from "react";
import { Button, Form, Container, Header, Table } from "semantic-ui-react";
import axios from "axios";
import { toast } from "react-toastify";
import EditModal from "./EditModal";
import AddModal from "./AddModal"; // Import the AddModal component

function Sheet() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    salary: "",
    hobby: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState(false);

  // State for controlling the EditModal
  const [editModalOpen, setEditModalOpen] = useState(false);

  // State for controlling the AddModal
  const [addModalOpen, setAddModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "https://api.sheety.co/bdd9c0090f5f80d1c36e25ec1232f4bc/googleSheetsApi/sheety",
        {
          sheety: formData,
        }
      )
      .then((response) => {
        setRes(response.data.sheety);
        setSubmittedData([...submittedData, response.data.sheety]);
        toast.success("Data saved successfully");
      })
      .catch((error) => {
        console.error(error);
      });

    setFormData({
      id: "",
      name: "",
      age: "",
      salary: "",
      hobby: "",
    });
  };

  // Rest of your component code...

  // Function to open the EditModal
  const openEditModal = (data) => {
    setFormData(data);
    setEditModalOpen(true);
  };

  // Function to handle editing an item
  const handleEdit = async (id, data) => {
    const url = `https://api.sheety.co/bdd9c0090f5f80d1c36e25ec1232f4bc/googleSheetsApi/sheety/${id}`;
    try {
      await axios.put(url, { sheety: data });
      console.log("Object updated");
      const updatedData = submittedData.map((item) => (item.id === id ? data : item));
      setSubmittedData(updatedData);
      toast.success("Data successfully updated");
    } catch (error) {
      console.error("Error updating object:", error);
    }
  };

  // Function to delete an item
  const handleDelete = async (id) => {
    const url = `https://api.sheety.co/bdd9c0090f5f80d1c36e25ec1232f4bc/googleSheetsApi/sheety/${id}`;
    try {
      await axios.delete(url);
      console.log("Object deleted");
      setSubmittedData(submittedData.filter((item) => item.id !== id));
      toast.success("Data successfully deleted");
    } catch (error) {
      console.error("Error deleting object:", error);
    }
  };

  // Function to fetch data
  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("https://api.sheety.co/bdd9c0090f5f80d1c36e25ec1232f4bc/googleSheetsApi/sheety")
      .then((response) => {
        setSubmittedData(response.data.sheety);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [res]);

  return (
    <Container>
      <Header as="h2">Sheet</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>ID</label>
          <input type="text" name="id" value={formData.id} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input type="text" name="age" value={formData.age} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input type="text" name="hobby" value={formData.hobby} onChange={handleChange} />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Hobby</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan="6">Loading...</Table.Cell>
            </Table.Row>
          ) : (
            submittedData.map((data) => (
              <Table.Row key={data.id}>
                <Table.Cell>{data.id}</Table.Cell>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.age}</Table.Cell>
                <Table.Cell>{data.salary}</Table.Cell>
                <Table.Cell>{data.hobby}</Table.Cell>
                <Table.Cell>
                  <Button onClick={() => handleDelete(data.id)}>Delete</Button>
                  <Button onClick={() => openEditModal(data)}>Edit</Button>
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
      {/* Render the EditModal */}
      <EditModal
        open={editModalOpen}
        setOpen={setEditModalOpen}
        formData={formData}
        setFormData={setFormData}
        handleEdit={handleEdit}
      />

      {/* Button to open the AddModal */}
      <Button onClick={() => setAddModalOpen(true)}>Add Data</Button>

      {/* Render the AddModal */}
      <AddModal
        open={addModalOpen}
        setOpen={setAddModalOpen}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </Container>
  );
}

export default Sheet;
