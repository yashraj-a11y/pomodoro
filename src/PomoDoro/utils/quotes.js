export const getMotivationalQuote = () => {
    const quotes = [
      "Start acting, stop procrastinating!",
      "Focus on what matters most!",
      "Every small step counts!",
      "Time to get things done!",
      "Your future self will thank you!",
      "Progress over perfection!",
      "Make today productive!"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  };