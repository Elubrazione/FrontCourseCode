import { configureStore } from "@reduxjs/toolkit";
import { stuSlice } from "./stuSlice";

export default configureStore({
    reducer: {
        student: stuSlice.reducer
    }
});