'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import ThemeToggle from './ThemeToggle';

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
    >
      {children}
      <ThemeToggle />
    </NextThemesProvider>
  );
} 
