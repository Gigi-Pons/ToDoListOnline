import React, { useState } from 'react';
import './TaskForm.css';

//New Task
function TaskForm() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskPriority, setTaskPriority] = useState('Low');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission of the task details
    console.log('Task Details:', { taskName, taskDescription, taskPriority });
    // This is where you'd typically send the data to a server or handle it accordingly
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="content">
        <label>Task Name:</label>
        <input 
          type="text" 
          value={taskName} 
          onChange={(e) => setTaskName(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Task Description:</label>
        <textarea 
          value={taskDescription} 
          onChange={(e) => setTaskDescription(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Priority:</label>
        <select 
          value={taskPriority} 
          onChange={(e) => setTaskPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;
