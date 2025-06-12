// Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = ({ logout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div>
            <h2>Hi, welcome to Profile</h2>
            <h3>This page is protected</h3><br />
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Profile;