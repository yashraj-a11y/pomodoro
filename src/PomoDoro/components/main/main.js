import React, { useState, useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';
import { useTimer } from '../../hooks/useTimer';
import TaskManager from 'tasks/TaskManager';
import { formatTime } from '../../utils/timerUtils';
import "./Main.css";

const Main = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const {
    activeTab,
    setActiveTab,
    timeLeft,
    isRunning,
    isPaused,
    session,
    startTimer,
    pauseTimer,
    resetTimer,
    restartTimer
  } = useTimer();

  return (
    <div className={`main-container ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="timer-container">
        <div className="timer-box">
          <div className="mode-buttons">
            <button 
              className={activeTab === "Pomodoro" ? "active" : ""} 
              onClick={() => setActiveTab("Pomodoro")}
            >
              Pomodoro
            </button>
            <button 
              className={activeTab === "Short Break" ? "active" : ""} 
              onClick={() => setActiveTab("Short Break")}
            >
              Short Break
            </button>
            <button 
              className={activeTab === "Long Break" ? "active" : ""} 
              onClick={() => setActiveTab("Long Break")}
            >
              Long Break
            </button>
          </div>
          
          <h1 className="time-display">{formatTime(timeLeft)}</h1>
          
          <div className="timer-controls">
            {!isRunning ? (
              <button className="start-button" onClick={startTimer}>
                START
              </button>
            ) : (
              <button className="start-button pause-btn" onClick={pauseTimer}>
                {isPaused ? 'RESUME' : 'PAUSE'}
              </button>
            )}
          </div>
          
          {(isRunning || isPaused) && (
            <div className="timer-controls">
              <button className="control-btn reset-btn" onClick={resetTimer}>
                Reset
              </button>
              <button className="control-btn restart-btn" onClick={restartTimer}>
                Restart
              </button>
            </div>
          )}
        </div>
        
        <p className="session-number">#{session}</p>
        <p className="focus-text">
          {activeTab === "Pomodoro" ? "Time to focus!" : 
           activeTab === "Short Break" ? "Take a short break!" : 
           "Take a long break!"}
        </p>
      </div>

      <TaskManager />
    </div>
  );
};

export default Main;