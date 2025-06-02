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

  // Function to move a task from one column to another
  const moveTask = (taskId, sourceColumnId, targetColumnId) => {
    // Don't do anything if dropping in the same column
    if (sourceColumnId === targetColumnId) {
      return;
    }

    // Create a new copy of columns array to update state
    setColumns(prevColumns => {
      // Find the source column and task
      const sourceColumn = prevColumns.find(col => col.id === sourceColumnId);
      if (!sourceColumn) return prevColumns;

      // Find the task in the source column
      const taskToMove = sourceColumn.tasks.find(task => task.id === taskId);
      if (!taskToMove) return prevColumns;

      // Create updated columns array by removing task from source and adding to target
      return prevColumns.map(column => {
        // Remove from source column
        if (column.id === sourceColumnId) {
          return {
            ...column,
            tasks: column.tasks.filter(task => task.id !== taskId)
          };
        }
        // Add to target column
        if (column.id === targetColumnId) {
          return {
            ...column,
            tasks: [...column.tasks, taskToMove]
          };
        }
        // Return other columns unchanged
        return column;
      });
    });
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
            onMoveTask={moveTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
