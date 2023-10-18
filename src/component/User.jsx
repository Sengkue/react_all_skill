import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";

function User() {
    const [SearchParams, setSearchParams] = useSearchParams()
    const showActiveUser = SearchParams.get('filter') === 'active'
  return (
    <>
      <div>user1</div>
      <div>user2</div>
      <div>user3</div>
      <Outlet/>
      <div>
        <button onClick={()=> setSearchParams({filter:'active'})}>active User</button>
        <button onClick={()=> setSearchParams({})}>reset Filter</button>
      </div>
      {showActiveUser?(<h2>Showing active user</h2>):(<h2>show all users</h2>)}
    </>
  );
}

export default User;
