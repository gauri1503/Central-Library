import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure to import your CSS file

const Login = () => {
    const [role, setRole] = useState('user');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Redirect based on the selected role
        if (role === 'admin') {
            navigate('/admin-login'); // Replace with your actual admin home route
        } else {
            navigate('/user-login'); // Replace with your actual user home route
        }

        // Clear fields after submission (optional, depending on your flow)
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Choose your role:</label>
                    <div>
                        <label>
                            <input 
                                type="radio" 
                                value="admin" 
                                checked={role === 'admin'} 
                                onChange={handleRoleChange} 
                                required 
                            />
                            Admin
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                value="user" 
                                checked={role === 'user'} 
                                onChange={handleRoleChange} 
                                required 
                            />
                            User
                        </label>
                    </div>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
