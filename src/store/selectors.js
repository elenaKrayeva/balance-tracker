import { createSelector } from "@reduxjs/toolkit";

export const selectAllExpenses = (state) => state.expenses.expensesArr;
export const selectActiveDropdowns = (state) => state.filterExpenses;

export const selectExpensesByDropdowns = createSelector(
  [selectAllExpenses, selectActiveDropdowns],
  (allExpenses, activeDropdowns) => {
    if (
      activeDropdowns.selectedCategory === "Все категории" &&
      activeDropdowns.selectedYear === "Все года"
    )
      return allExpenses;

    if (
      activeDropdowns.selectedCategory === "Все категории" &&
      activeDropdowns.selectedYear !== "Все года"
    ) {
      return allExpenses.filter(
        (expense) =>
          new Date(expense.date).getFullYear() ===
          activeDropdowns.selectedYear
      );
    }
    if (
        activeDropdowns.selectedCategory !== "Все категории" &&
        activeDropdowns.selectedYear === "Все года"
      ) {
        return allExpenses.filter(
          (expense) =>
           expense.category ===
            activeDropdowns.selectedCategory
        );
      }
      if (
        activeDropdowns.selectedCategory !== "Все категории" &&
        activeDropdowns.selectedYear !== "Все года"
      ) {
        return allExpenses.filter(
          (expense) =>
           expense.category ===
            activeDropdowns.selectedCategory
        ).filter((expense) => new Date(expense.date).getFullYear() === activeDropdowns.selectedYear)
      }
  }
);
export const selectActiveSort = state => state.sortExpenses;

export const selectByDropdownsAndSorted = createSelector(
  [selectExpensesByDropdowns, selectActiveSort],
  ([...filteredExpenses], activeSort) => {
    if (activeSort === 'byDateUp') {
      return filteredExpenses.sort((a, b) => a.date - b.date)
    };
    if (activeSort === 'byDateDown') {
      return filteredExpenses.sort((a, b) => b.date - a.date)
    };
    if (activeSort === 'byAlphabetUp') {
      return filteredExpenses.sort((a, b) => a.description.localeCompare(b.description));
    };
    if (activeSort === 'byAlphabetDown') {
      return filteredExpenses.sort((a, b) => b.description.localeCompare(a.description));
    };
    if (activeSort === 'byAmountUp') {
      return filteredExpenses.sort((a, b) => a.amount - b.amount);;
    };
    if (activeSort === 'byAmountDown') {
      return filteredExpenses.sort((a, b) => b.amount - a.amount);;
    }
  }
)

//==================================================================

export const selectAllIncomes = (state) => state.incomes.incomesArr;
export const selectActiveDropdownsIncomes = (state) => state.filterIncomes;

export const selectIncomesByDropdowns = createSelector(
  [selectAllIncomes, selectActiveDropdownsIncomes],
  (allIncomes, activeDropdowns) => {
    if (
      activeDropdowns.selectedCategory === "Все категории" &&
      activeDropdowns.selectedYear === "Все года"
    )
      return allIncomes;

    if (
      activeDropdowns.selectedCategory === "Все категории" &&
      activeDropdowns.selectedYear !== "Все года"
    ) {
      return allIncomes.filter(
        (income) =>
          new Date(income.date).getFullYear() ===
          activeDropdowns.selectedYear
      );
    }
    if (
        activeDropdowns.selectedCategory !== "Все категории" &&
        activeDropdowns.selectedYear === "Все года"
      ) {
        return allIncomes.filter(
          (income) =>
           income.category ===
            activeDropdowns.selectedCategory
        );
      }
      if (
        activeDropdowns.selectedCategory !== "Все категории" &&
        activeDropdowns.selectedYear !== "Все года"
      ) {
        return allIncomes.filter(
          (income) =>
           income.category ===
            activeDropdowns.selectedCategory
        ).filter((income) => new Date(income.date).getFullYear() === activeDropdowns.selectedYear)
      }
  }
);