import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

const THEME_KEY = 'jm-theme';

type ThemeMode = 'dark' | 'light';
type ThemeToggleVariant = 'hero' | 'shell';

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

function getInitialTheme(): ThemeMode {
  if (typeof document === 'undefined') return 'dark';

  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'dark' || stored === 'light') return stored;

  const current = document.documentElement.dataset.theme;
  return current === 'light' ? 'light' : 'dark';
}

interface ThemeToggleProps {
  className?: string;
  variant?: ThemeToggleVariant;
}

export default function ThemeToggle({
  className = '',
  variant = 'shell',
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_KEY, nextTheme);
    setTheme(nextTheme);
  }

  const isDark = theme === 'dark';
  const variantClassName =
    variant === 'hero'
      ? 'border border-white/12 bg-panel-tint text-white hover:bg-white/10'
      : 'border border-white/15 bg-white/10 text-white hover:bg-white/15';

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-sm transition-colors duration-300 ${variantClassName} ${className}`.trim()}
    >
      {isDark ? (
        <Moon size={15} strokeWidth={1.8} />
      ) : (
        <Sun size={15} strokeWidth={1.8} />
      )}
    </button>
  );
}
