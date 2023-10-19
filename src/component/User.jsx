import React from "react";
import { NavLink } from "react-router-dom";

import { Outlet, useSearchParams } from "react-router-dom";

function User() {
  const [SearchParams, setSearchParams] = useSearchParams();
  const showActiveUser = SearchParams.get("filter") === "active";

  const NavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "blue" : "",
      textDecoration: "none",
    };
  };
  return (
    <>
      <div>user1</div>
      <div>user2</div>
      <div>user3</div>

      <button>
        <NavLink style={NavLinkStyle} to="/user/555">
          user Id "555"
        </NavLink>
      </button>
      <button>
        <NavLink style={NavLinkStyle} to="/user/78781525">
         go to user Detail by this Id "78781525"
        </NavLink>
      </button>

      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          active User
        </button>
        <button onClick={() => setSearchParams({})}>reset Filter</button>
      </div>
      {showActiveUser ? <h2>Showing active user</h2> : <h2>show all users</h2>}
    </>
  );
}

export default User;
