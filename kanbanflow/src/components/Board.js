import React, { useState } from 'react';
import Column from './Column';

/**
 * Board Component
 * 
 * Main container component for the Kanban board.
 * Manages columns and the overall board state.
 */
function Board() {
  // Sample initial data with some dummy tasks for demonstration
  const [columns, setColumns] = useState([
    { 
      id: '1', 
      title: 'To Do', 
      tasks: [
        { id: 't1', title: 'Research APIs', description: 'Find and compare available options', priority: 'medium', color: '#ffb74d' },
        { id: 't2', title: 'Design database schema', description: 'Create initial ER diagram', priority: 'high', color: '#ff5252' }
      ] 
    },
    { 
      id: '2', 
      title: 'In Progress', 
      tasks: [
        { id: 't3', title: 'Implement user authentication', description: 'Using JWT tokens', priority: 'high', color: '#ff5252' }
      ] 
    },
    { 
      id: '3', 
      title: 'Done', 
      tasks: [
        { id: 't4', title: 'Set up project repository', description: 'Initialize with React template', priority: 'low', color: '#4caf50' }
      ] 
    }
  ]);

  // Function to add a task to a specific column
  const addTask = (columnId, newTask) => {
    setColumns(columns.map(column => {
      if (column.id === columnId) {
        return {
          ...column,
          tasks: [...column.tasks, { ...newTask, id: `t${Date.now()}` }]
        };
      }
      return column;
    }));
  };

  return (
    <div className="board">
      <h1>KanbanFlow Board</h1>
      <div className="board-columns">
        {columns.map(column => (
          <Column 
            key={column.id} 
            columnId={column.id}
            title={column.title} 
            tasks={column.tasks}
            onAddTask={(task) => addTask(column.id, task)}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
