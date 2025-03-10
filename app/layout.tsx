import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { LoadingBar } from '@/components/ui/loading-bar';
import { Toaster } from '@/components/ui/toaster';
import { KeyboardFocusManager } from '@/components/ui/keyboard-focus';
import { AnimatedContainer } from '@/components/ui/animated-container';
import { animations } from '@/lib/styles/animations';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ticketing System',
  description: 'A modern ticketing system for managing support requests',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LoadingBar />
          <KeyboardFocusManager />
          <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:p-4 focus:bg-background focus:text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
            Skip to main content
          </a>
          <AnimatedContainer animation={animations.pageEnter}>
            {children}
          </AnimatedContainer>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}