import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./Auth";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const location = useLocation();
  const requirePath = location.state?.path || '';
  const navigate = useNavigate();
  const handleLogin = () => {
    auth.login(user);
    navigate(requirePath, {replace: true});
  };
  return (
    <div>
      <label>
        UserName:{""}
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>login</button>
    </div>
  );
}

export default Login;
