import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import TaskList from './TaskList';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import TaskForm from './TaskForm';
import Navigation from './Navigation';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import Home from './Home';
import './App.css';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Protected routes */}
          <Route path="/tasks" element={<ParentComponent />} />
          <Route path="/task-form" element={<TaskForm/>} />
          {/* <Route path="/edit-task" element={<ParentComponent />} />  */}

          {/* Public routes */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
