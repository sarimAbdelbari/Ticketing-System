"use client";

import { useEffect } from "react";

export function KeyboardFocusManager() {
  useEffect(() => {
    function handleFirstTab(e: KeyboardEvent) {
      if (e.key === 'Tab') {
        document.body.classList.add('keyboard-user');
        window.removeEventListener('keydown', handleFirstTab);
      }
    }

    window.addEventListener('keydown', handleFirstTab);
    return () => {
      window.removeEventListener('keydown', handleFirstTab);
    };
  }, []);

  return null;
}