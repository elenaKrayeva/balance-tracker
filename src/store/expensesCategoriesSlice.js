import { createSlice } from "@reduxjs/toolkit";
import { EXPENSECATEGORIES } from "../mocks";

const expensesCategoriesSlice = createSlice({
  name: "expensesCategories",
  initialState: {
    expensesCategArr: EXPENSECATEGORIES,
  },
  reducers: {
    addExpenseCategory(state, action) {
      state.expensesCategArr.push({
        id: Date.now(),
        name: action.payload.inputExpense.charAt(0).toUpperCase() + action.payload.inputExpense.slice(1),
        isEdditing: false,
      });
    },
    removeExpenseCategory(state, action) {
      state.expensesCategArr = state.expensesCategArr.filter(
        (expenseCat) => expenseCat.id !== action.payload.id
      );
    },
  }, 
});

export const { addExpenseCategory, removeExpenseCategory} = expensesCategoriesSlice.actions;
export default expensesCategoriesSlice.reducer;
