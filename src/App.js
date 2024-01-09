import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute'; // Import PrivateRoute
import TaskList from './TaskList';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import TaskForm from './TaskForm';
import Navigation from './Navigation';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import './App.css';

function App() {
  return (
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
      <Router>
        <Navigation />
        <Routes>
          {/* Protected routes */}
          <Route path="/tasks" element={<PrivateRoute component={TaskForm} />} />
          <Route path="/edit-task" element={<PrivateRoute component={TaskList} />} />

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
