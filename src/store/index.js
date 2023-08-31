import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './expensesSlice';
import incomeReducer from './incomesSlice';
import filterExpensesReducer from './filterExpensesSlice';
import filterIncomesReducer from './filterIncomesSlice';
import expensesCategoriesReducer from './expensesCategoriesSlice';
import incomesCategoriesReducer from './incomesCategoriesSlice';
import sortExpensesReducer from './sortExpensesSlice';

export default configureStore({
    reducer: {
        expenses: expenseReducer,
        incomes: incomeReducer,
        filterExpenses: filterExpensesReducer,
        filterIncomes: filterIncomesReducer,
        expensesCategories: expensesCategoriesReducer,
        incomesCategories: incomesCategoriesReducer,
        sortExpenses: sortExpensesReducer,
    }
})