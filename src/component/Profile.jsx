import React from 'react'
import { useAuth } from './Auth'
import { useNavigate } from 'react-router-dom';

function Profile() {
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogout  = () => {
        auth.logout();
        navigate('/');
        
    }
  return (
    <div>
        
        <h1>Profile page</h1>
        <p>welcome to {auth.user}</p>
        <button onClick={handleLogout}>Logout</button>
        </div>
  )
}

export default Profile