import React, { useState, useEffect } from "react";
import { Button, Form, Container, Header, Table } from "semantic-ui-react";
import axios from "axios";
import { toast } from "react-toastify";


function Sheet() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    salary: "",
    hobby: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [res, setRes] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 await   axios
      .post(
        "https://script.google.com/macros/s/AKfycbxjmnuvK-5HBKXjf76svJyTKsaOohXrDsTVjNh-70SW_XCQT98G9quiS-WMCZwmwT5Z/exec",
        formData
      )
      .then((response) => {
        setRes(response.data);
        console.log(response.data);
        setSubmittedData([...submittedData, response.data]);
        toast.success("Data saved successfully");
        // window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
    setFormData({
      name: "",
      age: "",
      salary: "",
      hobby: "",
    });
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://sheet.best/api/sheets/e9e05548-b34d-4449-8200-394d04790719")
      .then((response) => {
        setSubmittedData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, [res]);

  return (
    <Container>
      <Header as="h2">Sheet</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name {formData.name}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Hobby</label>
          <input
            type="text"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Age</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Hobby</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan="4">Loading...</Table.Cell>
            </Table.Row>
          ) : (
            submittedData.map((data) => (
              <Table.Row key={data.id}>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.age}</Table.Cell>
                <Table.Cell>{data.salary}</Table.Cell>
                <Table.Cell>{data.hobby}</Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table>
    </Container>
  );
}

export default Sheet;