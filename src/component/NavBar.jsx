import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";
function NavBar() {
  const NavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "blue" : "",
    };
  };
  const auth = useAuth();
  return (
    <nav>
      <NavLink style={NavLinkStyle} to="/">
        Home
      </NavLink>
      <NavLink style={NavLinkStyle} to="/about">
        About
      </NavLink>
      <NavLink style={NavLinkStyle} to="/blog">
        Blog
      </NavLink>
      <NavLink style={NavLinkStyle} to="/contact">
        Contact
      </NavLink>
      <NavLink style={NavLinkStyle} to="/product">
        Product
      </NavLink>
      <NavLink style={NavLinkStyle} to="/user">
        User
      </NavLink>
      <NavLink style={NavLinkStyle} to="/profile">
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={NavLinkStyle} to="/login">
          Login
        </NavLink>
      )}
      <NavLink style={NavLinkStyle} to="/cookies">
        Cookies
      </NavLink>
    </nav>
  );
}

export default NavBar;
