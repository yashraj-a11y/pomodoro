import { useState, useEffect, useRef } from 'react';

export const useTimer = () => {
  const [activeTab, setActiveTab] = useState("Pomodoro");
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [session, setSession] = useState(1);
  
  const intervalRef = useRef(null);

  const durations = {
    "Pomodoro": 25 * 60,
    "Short Break": 5 * 60,
    "Long Break": 15 * 60
  };

  useEffect(() => {
    setTimeLeft(durations[activeTab]);
    setIsRunning(false);
    setIsPaused(false);
  }, [activeTab]);

  useEffect(() => {
    if (isRunning && !isPaused && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsPaused(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isPaused, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
    setIsPaused(false);
  };

  const pauseTimer = () => {
    setIsPaused(!isPaused);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(durations[activeTab]);
  };

  const restartTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(durations[activeTab]);
    setTimeout(() => {
      setIsRunning(true);
    }, 100);
  };

  return {
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
  };
};