import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: []
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todo = [...state.todo, action.payload]
        },
        removeTodo: (state, action) => {
            const newTodo = state.todo.filter(item => item.id !== action.payload);
            state.todo = newTodo;
        },
        removeAll: state => {
            state.todo = []
        }
    }
});

export const { addTodo, removeTodo, removeAll } = todoSlice.actions;
export default todoSlice.reducer;

