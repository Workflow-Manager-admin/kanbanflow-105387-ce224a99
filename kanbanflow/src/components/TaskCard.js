import React, { useState } from 'react';

/**
 * TaskCard Component
 * 
 * Represents an individual task card in a column.
 * Displays task details like title, description, and status.
 * Includes drag-and-drop functionality to move tasks between columns.
 */
function TaskCard({ taskId, columnId, title, description, priority, color, onEdit, isEditing }) {
  const [isDragging, setIsDragging] = useState(false);
  
  // Map priority to a human-readable format with capitalization
  const formatPriority = (priority) => {
    if (!priority) return '';
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  // Handle the start of a drag operation
  const handleDragStart = (e) => {
    // Set the data to be transferred
    e.dataTransfer.setData('taskId', taskId);
    e.dataTransfer.setData('sourceColumnId', columnId);
    
    // Set a drag effect and visual appearance
    e.dataTransfer.effectAllowed = 'move';
    
    // Set drag state for visual feedback
    setIsDragging(true);
    
    // Use setTimeout to ensure the dragging class is applied
    // This is a workaround because in some browsers the drag image is created immediately
    setTimeout(() => {
      setIsDragging(true);
    }, 0);
  };

  // Handle the end of a drag operation
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  
  // Handle edit button click
  const handleEditClick = (e) => {
    // Stop the event from triggering drag
    e.stopPropagation();
    e.preventDefault();
    onEdit(taskId);
  };
  
  return (
    <div 
      className={`task-card ${isDragging ? 'dragging' : ''}`}
      style={{ borderLeft: `4px solid ${color || 'var(--base-light)'}` }}
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      aria-label={`Task: ${title}`}
      aria-grabbed={isDragging}
      role="option"
    >
      <h3 className="task-title">{title}</h3>
      {description && <p className="task-description">{description}</p>}
      {priority && <div className="task-priority">Priority: {formatPriority(priority)}</div>}
      <div className="task-actions">
        <button 
          className="edit-button" 
          aria-label="Edit task"
          onClick={handleEditClick}
          disabled={isEditing}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
