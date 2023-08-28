import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectedCategory: 'Все категории',
    selectedYear: 'Все года',
}

const filterIncomesSlice = createSlice({
    name: 'filterIncomes',
    initialState,
    reducers: {
        changeCategory(state, action)  {
           state.selectedCategory = action.payload
        },
        changeYear(state, action) {
            state.selectedYear = action.payload
        }
    }
});

export const {changeCategory, changeYear} = filterIncomesSlice.actions;
export default filterIncomesSlice.reducer;