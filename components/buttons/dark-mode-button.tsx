import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { LightModeRounded, DarkModeRounded } from '@mui/icons-material';

export default function DarkModeToggleButton() {
  const [defaultVal, setDefaultVal] = useState<string>("light");
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setDefaultVal(localStorage.getItem("theme") ?? "light");
    setTheme(localStorage.getItem("theme") ?? "light");
  }, []);

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="
        w-12 h-10
        rounded
        inline-flex
        items-center justify-center
        bg-gray-200/70 dark:bg-gray-800
        hover:bg-gray-200 dark:hover:bg-gray-700
        "
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
        setDefaultVal(theme === 'dark' ? 'light' : 'dark')
      }}
    >
      {defaultVal !== 'dark' ? (
        <LightModeRounded className="w-5 h-5 text-gray-500" />
      ) : (
        <DarkModeRounded className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
}
