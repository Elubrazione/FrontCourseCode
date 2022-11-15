/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import formDataType from "../dataTypes";
import { RootState } from "./store";

const stuInfos: formDataType[] = [];
export const stuSlice = createSlice({
  name: "stu",
  initialState: stuInfos,
  reducers: {
		setStu: (state, action: PayloadAction<formDataType[]>) => {
      state = [...action.payload];
      console.log("state: ", state);
    },
    addStu: (state, action) => {
      state.unshift();
    },
    toggleStu: (state, action) => {
      state = action.payload;
    },
    // deleteStu: (state, action) => {},
  },
});

export const { setStu, addStu, toggleStu } = stuSlice.actions;
export const selectStudents = (state: RootState) => state.student;
export default stuSlice.reducer;
