import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useTasks } from '../../hooks/useTasks';
import './Settings.css';

const Settings = ({ onClose }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const { taskHistory } = useTasks();

  return (
    <div className="modal-overlay">
      <div className="settings-panel">
        <h2>Settings</h2>
        
        <div className="settings-section">
          <h3>Appearance</h3>
          <div className="setting-item">
            <span>Dark Mode</span>
            <div 
              className={`toggle-switch ${isDarkMode ? 'active' : ''}`}
              onClick={toggleTheme}
            >
              <div className="toggle-slider"></div>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h3>Task History</h3>
          <div className="task-history">
            {taskHistory.length > 0 ? (
              taskHistory.map((task, index) => (
                <div key={index} className="history-item">
                  {task.text} - {new Date(task.createdAt).toLocaleDateString()}
                </div>
              ))
            ) : (
              <div className="history-item">No tasks completed yet</div>
            )}
          </div>
        </div>

        <div className="form-buttons">
          <button className="btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;