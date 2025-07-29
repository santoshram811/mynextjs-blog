'use client';

import '../i18n'; // 👈 Initialize i18n here
import { ThemeProvider } from 'next-themes'; // optional

export function Providers({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
