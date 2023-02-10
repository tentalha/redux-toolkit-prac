import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import rocketReducer from "../features/rockets/rocketSlice";
import todoSlice from "../features/todos/todoSlice";

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoSlice,
        rocket: rocketReducer
    },
});