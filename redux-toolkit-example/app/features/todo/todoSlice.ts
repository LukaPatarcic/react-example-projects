import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../core/store/store';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Todo {
    id: string;
    title: string;
    description: string;
    status: 'ongoing' | 'done';
}

export type TodoState = {
    todos: Todo[];
};

const initialState: TodoState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        remove: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
        },
        markAsDone: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, status: 'done' } : todo
            );
        },
    },
});

export const { add, remove, markAsDone } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
