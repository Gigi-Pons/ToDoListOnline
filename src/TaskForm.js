// TaskForm.js
import React, { useState, useEffect } from 'react';

function TaskForm({ task, onSave, onCancel }) {
  const [taskData, setTaskData] = useState({
    name: '',
    description: '',
    priority: 'Low'
  });

  useEffect(() => {
    // Set the form fields to the task details when editing an existing task
    if (task) {
      setTaskData(task);
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(taskData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Name:</label>
        <input
          type="text"
          name="name"
          value={taskData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Task Description:</label>
        <textarea
          name="description"
          value={taskData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Priority:</label>
        <select
          name="priority"
          value={taskData.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <button type="submit">Save Task</button>
        <button type="button" onClick={onCancel}>Back to List</button>
      </div>
    </form>
  );
}

export default TaskForm;
