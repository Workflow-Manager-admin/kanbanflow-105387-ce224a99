import React, { useState } from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

/**
 * Column Component
 * 
 * Represents a single column in the Kanban board (e.g., "To Do", "In Progress", "Done").
 * Contains multiple task cards and handles adding new tasks.
 */
function Column({ columnId, title, tasks, onAddTask }) {
  const [showTaskForm, setShowTaskForm] = useState(false);

  const handleAddTask = (taskData) => {
    onAddTask(taskData);
    setShowTaskForm(false);
  };

  const handleCancelAdd = () => {
    setShowTaskForm(false);
  };

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

        {showTaskForm && (
          <TaskForm 
            onSubmit={handleAddTask}
            onCancel={handleCancelAdd}
          />
        )}
      </div>
      
      {!showTaskForm && (
        <button 
          className="add-task-button" 
          onClick={() => setShowTaskForm(true)}
        >
          + Add Task
        </button>
      )}
    </div>
  );
}

export default Column;
