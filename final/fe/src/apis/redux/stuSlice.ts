import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import formDataType from "../dataTypes";

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

export default stuSlice.reducer;
