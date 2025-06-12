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
            <h2>Hello user welcome to Profile</h2>
            <h3>This page is protected</h3><br />
            <p>This is the profile oage of the user </p>
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Profile;