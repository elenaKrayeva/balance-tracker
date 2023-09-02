import {createSlice} from '@reduxjs/toolkit';

const initialState = 'byDateDown';


const sortExpensesSlice  = createSlice({
    name: 'sortExpenses',
    initialState,
    reducers: {
        changeSortExpenses: (_, action) => action.payload,
    },
});

export const {changeSortExpenses} = sortExpensesSlice.actions;
export default sortExpensesSlice.reducer;