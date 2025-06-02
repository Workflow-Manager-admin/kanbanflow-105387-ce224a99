import React from 'react';

/**
 * TaskCard Component
 * 
 * Represents an individual task card in a column.
 * Displays task details like title, description, and status.
 */
function TaskCard({ title, description, priority, color }) {
  return (
    <div className="task-card" style={{ borderLeft: `4px solid ${color || 'var(--base-light)'}` }}>
      <h3 className="task-title">{title}</h3>
      {description && <p className="task-description">{description}</p>}
      {priority && <div className="task-priority">Priority: {priority}</div>}
      <div className="task-actions">
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
}

export default TaskCard;
