import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../core/store/store';

interface CounterState {
    value: number;
}

const initialState = { value: 0 } as CounterState;

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        incrementByAmount(state, action: PayloadAction<number>) {
            state.value += action.payload;
        },
    },
});

export const selectCount = (state: RootState) => state.counter.value;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
