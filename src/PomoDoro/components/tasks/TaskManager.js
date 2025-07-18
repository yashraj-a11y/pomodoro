import React from 'react';
import { useTasks } from '../../hooks/useTasks';
import { getMotivationalQuote } from '../../utils/quotes';
import './TaskManager.css';

const TaskManager = () => {
  const {
    tasks,
    showAddTask,
    newTaskText,
    setNewTaskText,
    setShowAddTask,
    addTask,
    toggleTask,
    deleteTask
  } = useTasks();

  return (
    <div className="tasks-section">
      <div className="tasks-header">
        <h3>Tasks</h3>
        <button className="menu-btn">⋮</button>
      </div>
      
      <div className="task-list">
        {showAddTask && (
          <div className="add-task-form">
            <input
              type="text"
              className="task-input"
              placeholder="What are you working on?"
              value={newTaskText}
              onChange={(e) => setNewTaskText(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              autoFocus
            />
            <button className="add-btn" onClick={addTask}>Add</button>
            <button className="cancel-btn" onClick={() => {
              setShowAddTask(false);
              setNewTaskText('');
            }}>Cancel</button>
          </div>
        )}

        {tasks.slice(0, 3).map(task => (
          <div key={task.id} className="task-item">
            <div className="task-content">
              <input
                type="checkbox"
                className="task-checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span className={`task-text ${task.completed ? 'completed' : ''}`}>
                {task.text}
              </span>
            </div>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              🗑️
            </button>
          </div>
        ))}

        {tasks.length === 0 && !showAddTask && (
          <div className="empty-state">
            {getMotivationalQuote()}
          </div>
        )}

        {!showAddTask && (
          <button className="add-task-btn" onClick={() => setShowAddTask(true)}>
            <span className="plus-icon">+</span> Add Task
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskManager;