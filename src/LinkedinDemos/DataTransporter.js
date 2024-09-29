import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
  userlist: [],
};
const DataTransporter = createSlice({
  name: "datatranspoter",
  initialState,
  reducers: {
    adduser: (state, action) => {
      state = state.userlist.push(action.payload);
    },
  },
});

const { reducer, actions } = DataTransporter;

export const { adduser } = actions;

export default reducer;
