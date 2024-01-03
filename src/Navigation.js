import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/edit-task">Edit Task</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
