import React from "react";
import { Container, Nav } from "react-bootstrap";

function Sidebar() {
  return (
    <>
      <div>
        <Container style={{ borderRight: "1px solid black", height: "100vh" }}>
          <h3 className="pt-2">Meetin Room</h3>
          <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">History</Nav.Link>
            <Nav.Link href="#services">User</Nav.Link>
          </Nav>
        </Container>
      </div>
    </>
  );
}

export default Sidebar;
