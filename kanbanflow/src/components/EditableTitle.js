import React, { useState } from 'react';

/**
 * EditableTitle Component
 * 
 * Enables inline editing of titles for tasks, columns, etc.
 * Displays as text but transforms to input field when clicked.
 */
function EditableTitle({ value, onUpdate, className, tagName = 'h3' }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(value);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setTitle(value);
    }
  };

  const handleSubmit = () => {
    if (title.trim() && title !== value) {
      onUpdate(title);
    } else {
      setTitle(value);
    }
    setIsEditing(false);
  };

  const handleBlur = () => {
    handleSubmit();
  };

  if (isEditing) {
    return (
      <input
        type="text"
        className={`editable-title-input ${className || ''}`}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  }

  const TagName = tagName;
  
  return (
    <TagName 
      className={`editable-title ${className || ''}`}
      onClick={() => setIsEditing(true)}
    >
      {value}
      <span className="edit-icon">✏️</span>
    </TagName>
  );
}

export default EditableTitle;
