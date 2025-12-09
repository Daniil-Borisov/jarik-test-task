import { create } from 'zustand';
import type { UserType } from '../types/user.types';

type AppStoreType = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  clearError: () => void;
  users: UserType[];
  setUsers: (users: UserType[]) => void;
};

export const useAppStore = create<AppStoreType>((set) => ({
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  error: null,
  setError: (error: string | null) => set({ error }),
  clearError: () => set({ error: null }),
  users: [],
  setUsers: (users: UserType[]) => set({ users }),
}));

