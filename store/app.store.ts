import { create } from 'zustand';

type AppStoreType = {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  error: string | null;
  setError: (error: string | null) => void;
  clearError: () => void;
};

export const useAppStore = create<AppStoreType>((set) => ({
  isLoading: false,
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  error: null,
  setError: (error: string | null) => set({ error }),
  clearError: () => set({ error: null }),
}));

