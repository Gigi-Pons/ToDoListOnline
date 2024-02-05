import React from 'react';
import './TaskList.css';

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <div className="task-list-container">
      <h2>List of Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            {/* Display mode: task details and action buttons */}
            <div className="task-details">
              {task.name} - {task.description} ({task.priority})
            </div>
            <div className="task-actions">
              <button className="edit-button" onClick={() => onEdit(task)}>Edit</button>
              <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
