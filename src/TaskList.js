import React, { useState } from 'react';
import './TaskList.css';

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Sample Task', description: 'Sample Description', priority: 'Low' }
  ]);

  const [editTaskId, setEditTaskId] = useState(null);
  const [editedTask, setEditedTask] = useState({ name: '', description: '', priority: '' });

  // Function to start editing a task
  const editTask = (task) => {
    setEditTaskId(task.id);
    setEditedTask({ ...task });
  };

  // Function to handle changes in the edit form
  const handleEditChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  // Function to save the edited task
  const saveEdit = () => {
    setTasks(tasks.map(task => task.id === editTaskId ? { ...editedTask } : task));
    setEditTaskId(null);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
<div className="task-list-container">
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            {editTaskId === task.id ? (
              // Edit mode: input fields and save button
              <div className="task-edit-form">
                <input 
                  type="text" 
                  name="name" 
                  value={editedTask.name} 
                  onChange={handleEditChange} 
                />
                <div className="description-box">
                  <textarea 
                    name="description" 
                    value={editedTask.description} 
                    onChange={handleEditChange} 
                  />
                </div>
                  <select 
                    name="priority" 
                    value={editedTask.priority} 
                    onChange={handleEditChange}
                  >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <button className="save-button" onClick={saveEdit}>Save</button>
              </div>
            ) : (
              // Display mode: task details and action buttons
              <>
                <div className="task-details">
                  {task.name} - {task.description} ({task.priority})
                </div>
                <div className="task-actions">
                  <button className="edit-button" onClick={() => editTask(task)}>Edit</button>
                  <button className="delete-button" onClick={() => deleteTask(task.id)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
