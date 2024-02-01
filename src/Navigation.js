// Navigation.js
import React, { useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import AuthContext
import './App.css';

function Navigation() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate('/login'); // Redirect to the login page after logout
  };

  const isEditPage = location.pathname.includes('/tasks');
  const isNewTask = location.pathname.includes('/task-form');

  return (
    <div className="navigation-bar">
      <nav>
        <ul>
          {!isAuthenticated && (
            <div className="loginButtons">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </div>
          )}
          {isAuthenticated && !isEditPage && !isNewTask && (
            <>
              <li>
                {/* Logout button */}
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
