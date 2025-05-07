import React, { useState } from "react";
import "./main.css";

const Main = () => {
  const [activeTab, setActiveTab] = useState("Pomodoro");

  return (
    <div className="main-container">
      

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
          
          <h1 className="time-display">25:00</h1>
          
          <button className="start-button">START</button>
        </div>
        
        <p className="session-number">#1</p>
        <p className="focus-text">Time to focus!</p>
      </div>

      <div className="tasks-section">
        <div className="tasks-header">
          <h3>Tasks</h3>
          <button className="menu-btn">⋮</button>
        </div>
        
        <div className="task-list">
          <button className="add-task-btn">
            <span className="plus-icon">+</span> Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
