import {createSlice} from '@reduxjs/toolkit';

const initialState = 'byDateDown';


const sortIncomesSlice  = createSlice({
    name: 'sortIncomes',
    initialState,
    reducers: {
        changeSortIncomes (state, action) {
            state = action.payload;
        },
    },
});

export const {changeSortIncomes} = sortIncomesSlice.actions;
export default sortIncomesSlice.reducer;