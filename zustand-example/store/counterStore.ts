import create from 'zustand'

interface CounterState {
	counter: number
	increase: (by: number) => void
}

export const useStore = create<CounterState>()(
(set) => ({
		counter: 0,
		increase: (by) => set((state) => ({ counter: state.counter + by })),
	})
)
