import React from 'react';
import './TaskList.css';

function TaskList({ tasks, onEdit, onDelete, onEditChange, editTaskId, editedTask, onSaveEdit }) {

  return (
    <div className="task-list-container">
      <h2>List of Tasks</h2>
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
                  onChange={onEditChange} 
                />
                <div className="description-box">
                  <textarea 
                    name="description" 
                    value={editedTask.description} 
                    onChange={onEditChange} 
                  />
                </div>
                <select 
                  name="priority" 
                  value={editedTask.priority} 
                  onChange={onEditChange}
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
                <button className="save-button" onClick={onSaveEdit}>Save</button>
              </div>
            ) : (
              // Display mode: task details and action buttons
              <>
                <div className="task-details">
                  {task.name} - {task.description} ({task.priority})
                </div>
                <div className="task-actions">
                  <button className="edit-button" onClick={() => onEdit(task)}>Edit</button>
                  <button className="delete-button" onClick={() => onDelete(task.id)}>Delete</button>
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
