import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    startDate: '',
    endDate: '',
}

const balanceSlice = createSlice({
    name: 'balance',
    initialState,
    reducers: {
        changeStartDate(state, action) {
            state.startDate = action.payload.startDate
        },
        changeEndDate(state, action) {
            state.endDate = action.payload.endDate
        },
    }
});

export const {changeStartDate, changeEndDate} = balanceSlice.actions;
export default balanceSlice.reducer;