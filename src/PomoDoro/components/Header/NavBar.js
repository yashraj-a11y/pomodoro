import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { useAuth } from '../../hooks/useAuth';
import './NavBar.css';

export default function NavBar({ onLoginClick, onSettingsClick }) {
  const { isDarkMode } = useContext(ThemeContext);
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <div className={`nav-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="nav-content">
        <h1 className="nav-logo">
          <span className="check-icon">✓</span>
          <span className="logo-text">Pomofocus</span>
        </h1>

        <div className="nav-buttons">
          <button className="nav-btn">
            <span className="btn-icon">📊</span>
            <span className="btn-text">Report</span>
          </button>

          <button className="nav-btn" onClick={onSettingsClick}>
            <span className="btn-icon">⚙️</span>
            <span className="btn-text">Setting</span>
          </button>

          {isLoggedIn ? (
            <button className="nav-btn" onClick={logout}>
              <span className="btn-icon">👋</span>
              <span className="btn-text">Logout ({user?.username})</span>
            </button>
          ) : (
            <button className="nav-btn" onClick={onLoginClick}>
              <span className="btn-icon">👤</span>
              <span className="btn-text">Sign In</span>
            </button>
          )}

          <button className="menu-btn">⋮</button>
        </div>
      </div>
    </div>
  );
}