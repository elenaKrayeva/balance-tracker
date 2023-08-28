import { createSlice } from "@reduxjs/toolkit";
import { INCOMESDATA } from "../mocks";

const incomesSlice = createSlice({
  name: "incomes",
  initialState: {
    incomesArr: INCOMESDATA,
  },
  reducers: {
    addIncome(state, action) {
      state.incomesArr.push({
        id: Date.now(),
        isEdditing: false,
        date: new Date(action.payload.inputDate).getTime(),
        description: action.payload.inputName,
        category: action.payload.selected,
        ampunt: action.payload.inputAmount,
      });
    },
    removeIncome(state, action) {
      state.incomesArr = state.incomesArr.filter(
        (income) => income.id !== action.payload
      );
    },
    editIncome(state, action) {
      const incomeToEdit = state.incomesArr.find(
        (income) => income.id === action.payload.id
      );
      incomeToEdit.isEdditing = !incomeToEdit.isEdditing;
      incomeToEdit.description = action.payload.description;
    },
  },
});

export const {addIncome, removeIncome, editIncome} = incomesSlice.actions;
export default incomesSlice.reducer;