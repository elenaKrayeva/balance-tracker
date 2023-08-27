import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './expensesSlice';
import incomeReducer from './incomesSlice';
import filterExpensesReducer from './filterExpensesSlice';

export default configureStore({
    reducer: {
        expenses: expenseReducer,
        incomes: incomeReducer,
        filterExpenses: filterExpensesReducer
    }
})