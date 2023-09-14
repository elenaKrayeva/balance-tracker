import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: 'Все категории',
    selectedYear: 'Все года',
}

const filterExpensesSlice = createSlice({
    name: 'filterExpenses',
    initialState,
    reducers: {
        changeCategory(state, action)  {
           state.selectedCategory = action.payload;
        },
        changeYear(state, action) {
            state.selectedYear = action.payload;
        }
    }
});

export const {changeCategory, changeYear} = filterExpensesSlice.actions;
export default filterExpensesSlice.reducer;