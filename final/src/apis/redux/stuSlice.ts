import { createSlice } from "@reduxjs/toolkit";
import formDataType from "../dataTypes";

export const stuSlice = createSlice({
    name: "stu",
    initialState: [],
    reducers: {
        addStu: state => {
            state.unshift();
        },
        toggleStu: state => {

        },
        deleteStu: state => {

        },
        clearStus: state => {
            
        }
    }
});

export const { addStu, toggleStu, deleteStu, clearStus } = stuSlice.actions;

export default stuSlice.reducer;