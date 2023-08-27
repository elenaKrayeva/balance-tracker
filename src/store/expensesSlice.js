import { createSlice } from "@reduxjs/toolkit";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expensesArr: [],
  },
  reducers: {
    addExpense(state, action) {
      state.expensesArr.push({
        id: Date.now(),
        isEdditing: false,
      });
    },
  },
});

export default expensesSlice.reducer;