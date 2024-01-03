import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './TaskList';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import TaskForm from './TaskForm';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/tasks" element={<TaskList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/edit-task" element={<TaskForm />} />
      </Routes>
    </Router>
  );
}

export default App;
