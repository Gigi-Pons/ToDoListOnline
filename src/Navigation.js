// Navigation.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext'; // Import AuthContext
import './App.css';

function Navigation() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div className="navigation-bar">
      <nav>
        <ul>
          {!isAuthenticated && (
            <>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </>
          )}
          {isAuthenticated && (
            <>
              <li><Link to="/tasks">New Task</Link></li>
              <li><Link to="/edit-task">Edit Task</Link></li>
              {/* Add a Logout button or link */}
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
