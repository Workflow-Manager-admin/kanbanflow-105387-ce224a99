import React from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">*</span> KanbanFlow
            </div>
          </div>
        </div>
      </nav>

      <main className="board-container">
        <div className="container">
          <Board />
        </div>
      </main>
    </div>
  );
}

export default App;