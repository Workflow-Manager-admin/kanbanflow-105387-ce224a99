import React from 'react';

/**
 * TaskCard Component
 * 
 * Represents an individual task card in a column.
 * Displays task details like title, description, and status.
 */
function TaskCard({ title, description, priority, color }) {
  // Map priority to a human-readable format with capitalization
  const formatPriority = (priority) => {
    if (!priority) return '';
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };
  
  return (
    <div 
      className="task-card" 
      style={{ borderLeft: `4px solid ${color || 'var(--base-light)'}` }}
      aria-label={`Task: ${title}`}
    >
      <h3 className="task-title">{title}</h3>
      {description && <p className="task-description">{description}</p>}
      {priority && <div className="task-priority">Priority: {formatPriority(priority)}</div>}
      <div className="task-actions">
        <button className="edit-button" aria-label="Edit task">Edit</button>
      </div>
    </div>
  );
}

export default TaskCard;
