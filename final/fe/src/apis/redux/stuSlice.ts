/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import formDataType from "../dataTypes";
import { RootState } from "./store";

const stuInfos: formDataType[] = [];

export const stuSlice = createSlice({
  name: "stu",
  initialState: stuInfos,
  reducers: {
		initStu: (state, action) => {
      state = [...action.payload];
      console.log("state: ", state);
    },
    addStu: (state) => {
      state.unshift();
    },
    toggleStu: (state) => {},
    deleteStu: (state) => {},
    clearStus: (state) => {},
  },
});

export const {
	initStu,
	addStu,
	toggleStu,
	deleteStu,
	clearStus
} = stuSlice.actions;

export const selectStudents = (state: RootState) => state.student;
export default stuSlice.reducer;
