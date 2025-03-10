"use client";

import { persist } from "zustand/middleware";
import {create} from "zustand";
interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  signIn: (user: User) => void;
  signOut: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      signIn: (user) => set({ user, isAuthenticated: true }),
      signOut: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);