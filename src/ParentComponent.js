// ParentComponent.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import LoginForm from './LoginForm';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function ParentComponent() {
  const { isAuthenticated } = useContext(AuthContext);
  console.log("Authentication status:", isAuthenticated);

  if (isAuthenticated) {
    // User is authenticated, show TaskList and TaskForm
    return (
      <div>
        <TaskList />
        <TaskForm />
      </div>
    );
  } else {
    // User is not authenticated, show LoginForm
    return <LoginForm />;
  }
}

export default ParentComponent;
