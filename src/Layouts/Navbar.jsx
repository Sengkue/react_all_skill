import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../component/Auth";
import {  Container, Form, Image, Navbar } from "react-bootstrap";
function NavBar() {
  const NavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "blue" : "",
    };
  };
  const auth = useAuth();
  return (
    <Navbar variant="dark">
      <Container>
        <div>
          <NavLink style={NavLinkStyle} to="/">
            Home
          </NavLink>
          <NavLink style={NavLinkStyle} to="/about">
            About
          </NavLink>
          {!auth.user && (
            <NavLink style={NavLinkStyle} to="/login">
              Login
            </NavLink>
          )}
          <NavLink style={NavLinkStyle} to="/cookies">
            Cookies
          </NavLink>
        </div>
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Form.Control
              type="text"
              id="text"
              placeholder="Search"
              aria-describedby="text"
              rounded
            />
            <h4 className="mx-2">|</h4>
            <Image
              style={{
                backgroundColor: "#B6BAEA",
                padding: "3px",
                marginLeft: "10px",
                borderRadius: "50%",
                marginRight: "5px",
                width: "45px",
                height: "45px",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/xeebkwmvaj-3e3ec.appspot.com/o/images%2FScreenshot%202023-10-25%20084604.png?alt=media&token=23bac0e8-10c5-4bcd-94d2-a4b5d1be1855&_gl=1*up31s6*_ga*MTUxNjk5MDU1OS4xNjk4MTIwNDkx*_ga_CW55HF8NVT*MTY5ODIyOTY3Ny44LjEuMTY5ODIyOTkwMy41NC4wLjA."
              roundedCircle
            />
            
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
