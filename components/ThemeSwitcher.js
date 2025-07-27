'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // ✅ Wait until component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  // ⛔ Avoid hydration mismatch
  if (!mounted) return null;

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="light">🌞 Light</option>
      <option value="dark">🌙 Dark</option>
      <option value="system">💻 System</option>
    </select>
  );
}
