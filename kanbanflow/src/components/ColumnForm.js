import React, { useState } from 'react';

/**
 * ColumnForm Component
 * 
 * Form for creating or editing columns on the Kanban board.
 */
function ColumnForm({ column, onSubmit, onCancel }) {
  const [title, setTitle] = useState(column?.title || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onSubmit({ title });
    }
  };

  return (
    <form className="column-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="column-title">Column Title</label>
        <input
          type="text"
          id="column-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter column title"
          required
        />
      </div>
      
      <div className="form-actions">
        <button type="button" className="btn btn-cancel" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn">
          {column ? 'Update Column' : 'Add Column'}
        </button>
      </div>
    </form>
  );
}

export default ColumnForm;
