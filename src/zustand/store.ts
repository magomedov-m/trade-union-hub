import { create } from 'zustand'

interface StoreState {
  key: string;
  updateKey: (newKey: string) => void;
}

const useStore = create<StoreState>((set) => ({
  key: '',
  updateKey: (newKey) => set({ key: newKey }),
}))

export default useStore;