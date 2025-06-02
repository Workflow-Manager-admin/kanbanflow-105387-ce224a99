import React, { useState } from 'react';
import Column from './Column';

/**
 * Board Component
 * 
 * Main container component for the Kanban board.
 * Manages columns and the overall board state.
 */
function Board() {
  // Sample initial data - will be expanded in future implementations
  const [columns, setColumns] = useState([
    { id: '1', title: 'To Do', tasks: [] },
    { id: '2', title: 'In Progress', tasks: [] },
    { id: '3', title: 'Done', tasks: [] }
  ]);

  return (
    <div className="board">
      <h1>KanbanFlow Board</h1>
      <div className="board-columns">
        {columns.map(column => (
          <Column 
            key={column.id} 
            title={column.title} 
            tasks={column.tasks}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
