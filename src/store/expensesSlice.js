import { createSlice } from "@reduxjs/toolkit";
import { EXPENSES_DATA } from "../mocks";

const expensesSlice = createSlice({
  name: "expenses",
  initialState: {
    expensesArr: EXPENSES_DATA,
  },
  reducers: {
    addExpense(state, action) {
      state.expensesArr.push({
        id: Date.now(),
        isEdditing: false,
        date: new Date(action.payload.inputDate).getTime(),
        description: action.payload.inputName.charAt(0).toUpperCase() + action.payload.inputName.slice(1),
        category: action.payload.selected,
        amount: +action.payload.inputAmount,
      });
    },
    removeExpense(state, action) {
      state.expensesArr = state.expensesArr.filter(
        (expense) => expense.id !== action.payload
      );
    },
    editExpense(state, action) {
      const expenseToEdit = state.expensesArr.find(
        (expense) => expense.id === action.payload.id
      );

      expenseToEdit.isEdditing = !expenseToEdit.isEdditing;
      expenseToEdit.description = action.payload.description;
    },
  },
});

export const { addExpense, removeExpense, editExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
