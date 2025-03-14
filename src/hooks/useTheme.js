import { useState, useEffect } from 'react';

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    // Check system preference if no saved preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme === 'dark' : prefersDark;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return { isDarkMode, toggleTheme };
};

export default useTheme;
