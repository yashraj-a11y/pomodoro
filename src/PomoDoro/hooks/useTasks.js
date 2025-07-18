import { useState } from 'react';

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTaskText, setNewTaskText] = useState('');
  const [taskHistory, setTaskHistory] = useState([]);

  const addTask = () => {
    if (newTaskText.trim()) {
      const newTask = {
        id: Date.now(),
        text: newTaskText.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks(prev => [...prev, newTask]);
      setTaskHistory(prev => [...prev, newTask]);
      setNewTaskText('');
      setShowAddTask(false);
    }
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return {
    tasks,
    showAddTask,
    newTaskText,
    taskHistory,
    setNewTaskText,
    setShowAddTask,
    addTask,
    toggleTask,
    deleteTask
  };
};
