import {createSlice} from '@reduxjs/toolkit';

const initialState = 'byDateDown';


const sortIncomesSlice  = createSlice({
    name: 'sortIncomes',
    initialState,
    reducers: {
        changeSortIncomes: (_, action) => action.payload,
    },
});

export const {changeSortIncomes} = sortIncomesSlice.actions;
export default sortIncomesSlice.reducer;