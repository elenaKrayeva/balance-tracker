import { createSlice } from "@reduxjs/toolkit";
import { INCOMESCATEGORIES } from "../mocks";

const incomesCategoriesSlice = createSlice({
  name: "expensesCategories",
  initialState: {
    incomesCategArr: INCOMESCATEGORIES,
  },
  reducers: {
    addIncomeCategory(state, action) {
      state.incomesCategArr.push({
        id: Date.now(),
        name: action.payload.inputIncome,
        isEdditing: false,
      });
    },
    removeIncomeCategory(state, action) {
      state.incomesCategArr = state.incomesCategArr.filter(
        (incomeCat) => incomeCat.id !== action.payload.id
      );
    },
  }, 
});

export const { addIncomeCategory, removeIncomeCategory} = incomesCategoriesSlice.actions;
export default incomesCategoriesSlice.reducer;
