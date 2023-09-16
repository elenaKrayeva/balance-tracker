import { createSlice } from "@reduxjs/toolkit";
import { EXPENSE_CATEGORIES } from "../mocks";
import {capitalizeStr} from "../utils"

const expensesCategoriesSlice = createSlice({
  name: "expensesCategories",
  initialState: {
    expensesCategArr: EXPENSE_CATEGORIES,
  },
  reducers: {
    addExpenseCategory(state, action) {
      state.expensesCategArr.push({
        id: Date.now(),
        name: capitalizeStr(action.payload.inputExpense),
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
