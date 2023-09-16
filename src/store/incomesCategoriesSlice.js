import { createSlice } from "@reduxjs/toolkit";
import { INCOMES_CATEGORIES } from "../mocks";
import { capitalizeStr } from "../utils";

const incomesCategoriesSlice = createSlice({
  name: "expensesCategories",
  initialState: {
    incomesCategArr: INCOMES_CATEGORIES,
  },
  reducers: {
    addIncomeCategory(state, action) {
      state.incomesCategArr.push({
        id: Date.now(),
        name: capitalizeStr(action.payload.inputIncome),
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
