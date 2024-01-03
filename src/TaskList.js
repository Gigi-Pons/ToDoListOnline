import React from 'react';

function TaskList() {
  // This would be replaced by your state management logic
  const tasks = [{ id: 1, name: 'Sample Task' }];

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
