import React, { useState } from 'react';
import { Button, Form, Container, Header } from "semantic-ui-react"; // Import the semantic-ui-react components

function AddModal() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    salary: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxjmnuvK-5HBKXjf76svJyTKsaOohXrDsTVjNh-70SW_XCQT98G9quiS-WMCZwmwT5Z/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      <Header as="h1">Contact Me form</Header>
      <Header as="h2">
        This demonstrates how to send data from a website form to Google sheet
        in React or Vanilla JS
      </Header>
      <div>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Field>
            <label>Your Name</label>
            <input placeholder="Your Name" name="name" type="text" value={formData.name} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Your Email</label>
            <input placeholder="Your Email" name="age" type="text" value={formData.age} onChange={handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Your Message</label>
            <input placeholder="Your Message" name="salary" type="text" value={formData.salary} onChange={handleChange} />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </div>
    </Container>
  );
}

export default AddModal;





















// import React from "react";
// import { Modal, Form, Button } from "semantic-ui-react";

// function AddModal({ open, setOpen, formData, setFormData, handleSubmit }) {
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <Modal open={open}>
//       <Modal.Header>Add Data</Modal.Header>
//       <Modal.Content>
//         <Form onSubmit={handleSubmit}>
//           <Form.Field>
//             <label>ID</label>
//             <input type="text" name="id" value={formData.id} onChange={handleChange} />
//           </Form.Field>
//           <Form.Field>
//             <label>Name</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} />
//           </Form.Field>
//           <Form.Field>
//             <label>Age</label>
//             <input type="text" name="age" value={formData.age} onChange={handleChange} />
//           </Form.Field>
//           <Form.Field>
//             <label>Salary</label>
//             <input type="text" name="salary" value={formData.salary} onChange={handleChange} />
//           </Form.Field>
//           <Form.Field>
//             <label>Hobby</label>
//             <input type="text" name="hobby" value={formData.hobby} onChange={handleChange} />
//           </Form.Field>
//           <Button type="submit">Submit</Button>
//         </Form>
//       </Modal.Content>
//       <Modal.Actions>
//         <Button negative onClick={() => setOpen(false)}>
//           Close
//         </Button>
//       </Modal.Actions>
//     </Modal>
//   );
// }

// export default AddModal;
