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
        name: action.payload.inputExpense,
        isEdditing: false,
      });
    },
    removeExpenseCategory(state, action) {
      state.expensesCategArr = state.expensesCategArr.filter(
        (expenseCat) => expenseCat.id !== action.payload.id
      );
    },
    /* editExpense(state, action) {
      const expenseToEdit = state.expensesArr.find(
        (expense) => expense.id === action.payload.id
      );

      expenseToEdit.isEdditing = !expenseToEdit.isEdditing;
      expenseToEdit.description = action.payload.description;
    }, */
  }, 
});

export const { addExpenseCategory, removeExpenseCategory} = expensesCategoriesSlice.actions;
export default expensesCategoriesSlice.reducer;
