import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navigation() {
  return (
    <div className="navigation-bar">
        <nav>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/tasks">New Task</Link></li>
            <li><Link to="/edit-task">Edit Task</Link></li>
        </ul>
        </nav>
    </div>
  );
}

export default Navigation;
