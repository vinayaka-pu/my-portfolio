import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Update the HTML root class when darkMode changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full text-2xl transition-colors duration-500 hover:bg-bohoGreen hover:text-bohoBeige dark:hover:bg-bohoBeige dark:hover:text-bohoDarkGreen"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}

