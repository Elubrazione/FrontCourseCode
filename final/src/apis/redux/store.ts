import { configureStore } from "@reduxjs/toolkit";
import stuReducer from "./stuSlice";

export const store = configureStore({
    reducer: {
        stu: stuReducer
    }
});

export default store;