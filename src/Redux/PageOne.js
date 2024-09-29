import { createSlice } from "@reduxjs/toolkit";
import React from "react";
const initialState = {
  value: 0,
};
const PageOne = createSlice({
  name: "pageone",
  initialState,
  reducers: {
    incrementNumber: (state, action) => {
      state.value = state.value + action.payload;
    },
    decrementNumber: (state, action) => {
      state.value = state.value - action.payload;
    },
    // resetNumber: (state, action) => (state.value = initialState),
  },
});

const { reducer, actions } = PageOne;

export const { incrementNumber, decrementNumber, resetNumber } = actions;

export default reducer;
