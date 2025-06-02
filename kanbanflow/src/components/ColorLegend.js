import React from 'react';

/**
 * ColorLegend Component
 * 
 * Displays the color-coding system for task statuses.
 * Shows which colors represent which priorities or categories.
 */
function ColorLegend() {
  // Sample color codes - can be expanded or made dynamic
  const colorCodes = [
    { color: '#ff5252', label: 'High Priority' },
    { color: '#ffb74d', label: 'Medium Priority' },
    { color: '#4caf50', label: 'Low Priority' },
    { color: '#2196f3', label: 'In Review' },
    { color: '#9c27b0', label: 'Blocked' }
  ];

  return (
    <div className="color-legend">
      <h3>Color Legend</h3>
      <div className="legend-items">
        {colorCodes.map((item, index) => (
          <div key={index} className="legend-item">
            <span 
              className="color-sample" 
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="color-label">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorLegend;
