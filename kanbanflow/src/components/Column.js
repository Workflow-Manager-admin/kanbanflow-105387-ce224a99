import React, { useState } from 'react';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

/**
 * Column Component
 * 
 * Represents a single column in the Kanban board (e.g., "To Do", "In Progress", "Done").
 * Contains multiple task cards and handles adding new tasks.
 */
function Column({ columnId, title, tasks, onAddTask, onMoveTask }) {
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleAddTask = (taskData) => {
    onAddTask(taskData);
    setShowTaskForm(false);
  };

  const handleCancelAdd = () => {
    setShowTaskForm(false);
  };

  // Handle drag over to allow dropping
  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
    if (!isDragOver) {
      setIsDragOver(true);
    }
  };

  // Handle drag leave to update visual feedback
  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  // Handle drop event
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    // Get task data from drag event
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    
    // Move the task if we have valid data and a move function
    if (taskId && sourceColumnId && onMoveTask) {
      onMoveTask(taskId, sourceColumnId, columnId);
    }
  };

  return (
    <div 
      className={`column ${isDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      aria-label={`${title} column`}
    >
      <h2 className="column-title">{title}</h2>
      <div className="task-list">
        {showTaskForm && (
          <TaskForm 
            onSubmit={handleAddTask}
            onCancel={handleCancelAdd}
          />
        )}
        
        {tasks && tasks.length > 0 ? (
          tasks.map(task => (
            <TaskCard
              key={task.id}
              taskId={task.id}
              columnId={columnId}
              title={task.title}
              description={task.description}
              priority={task.priority}
              color={task.color}
            />
          ))
        ) : (
          !showTaskForm && <p className="empty-column-text">No tasks yet</p>
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
