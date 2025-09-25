import { create } from 'zustand'

const useStore = create((set) => ({
  key: '',
  updateKey: (newKey: boolean) => set({ key: newKey }),
}))

export default useStore;