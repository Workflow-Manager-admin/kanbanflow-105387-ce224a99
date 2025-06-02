import React from 'react';
import TaskCard from './TaskCard';

/**
 * Column Component
 * 
 * Represents a single column in the Kanban board (e.g., "To Do", "In Progress", "Done").
 * Contains multiple task cards.
 */
function Column({ title, tasks }) {
  return (
    <div className="column">
      <h2 className="column-title">{title}</h2>
      <div className="task-list">
        {tasks && tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              title={task.title}
              description={task.description}
              priority={task.priority}
              color={task.color}
            />
          ))
        ) : (
          <p className="empty-column-text">No tasks yet</p>
        )}
      </div>
      <button className="add-task-button">+ Add Task</button>
    </div>
  );
}

export default Column;
