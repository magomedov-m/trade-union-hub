import { create } from 'zustand'

const useStore = create((set) => ({
  key: '',
  updateKey: (newKey) => set({ key: newKey }),
}))

export default useStore;