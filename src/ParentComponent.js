// ParentComponent.js
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import LoginForm from './LoginForm';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import { v4 as uuidv4 } from 'uuid';


let nextId = 1;

function ParentComponent() {
  const { isAuthenticated } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Sample Task', description: 'Sample Description', priority: 'Low' }
  ]);
  const [currentTask, setCurrentTask] = useState(null);

  const handleEdit = (task) => {
    setCurrentTask(task);
    setIsEditing(true);
  };

  const handleSave = (task) => {
    if (task.id) {
      // Update task
      setTasks(tasks.map(t => (t.id === task.id ? task : t)));
    } else {
      // Add new task with a unique ID
      setTasks([...tasks, { ...task, id: uuidv4() }]);
    }
    setCurrentTask(null);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setCurrentTask(null);
    setIsEditing(false);
  };

  const handleNewTask = () => {
    setCurrentTask({ name: '', description: '', priority: 'Low' });
    setIsEditing(true);
  };

  // Function to handle task deletion
  const handleDelete = (taskId) => {
    // Update tasks state to filter out the deleted task
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  if (isAuthenticated) {
    return (
      <div>
        {isEditing ? (
          // When isEditing is true, show the TaskForm
          <TaskForm task={currentTask} onSave={handleSave} onCancel={handleCancel} />
        ) : (
          // When isEditing is false, show the TaskList and "New Task" button
          <>
            <TaskList tasks={tasks}
             onEdit={handleEdit}
             onDelete={handleDelete}  />
            <button onClick={() => {
              setCurrentTask({ name: '', description: '', priority: 'Low' });
              setIsEditing(true);
            }}>
              New Task
            </button>
          </>
        )}
      </div>
    );
  } else {
    return <LoginForm />;
  }
}

export default ParentComponent;
