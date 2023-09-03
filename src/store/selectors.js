import { createSelector } from "@reduxjs/toolkit";

export const selectAllExpenses = (state) => state.expenses.expensesArr;
export const selectActiveDropdowns = (state) => state.filterExpenses;
export const selectBalancePeriod = (state) => state.balance;

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
          new Date(expense.date).getFullYear() === activeDropdowns.selectedYear
      );
    }
    if (
      activeDropdowns.selectedCategory !== "Все категории" &&
      activeDropdowns.selectedYear === "Все года"
    ) {
      return allExpenses.filter(
        (expense) => expense.category === activeDropdowns.selectedCategory
      );
    }
    if (
      activeDropdowns.selectedCategory !== "Все категории" &&
      activeDropdowns.selectedYear !== "Все года"
    ) {
      return allExpenses
        .filter(
          (expense) => expense.category === activeDropdowns.selectedCategory
        )
        .filter(
          (expense) =>
            new Date(expense.date).getFullYear() ===
            activeDropdowns.selectedYear
        );
    }
  }
);
export const selectActiveSortExpenses = (state) => state.sortExpenses;

export const selectByDropdownsAndSortedExp = createSelector(
  [selectExpensesByDropdowns, selectActiveSortExpenses],
  ([...filteredExpenses], activeSort) => {
    if (activeSort === "byDateUp") {
      return filteredExpenses.sort((a, b) => a.date - b.date);
    }
    if (activeSort === "byDateDown") {
      return filteredExpenses.sort((a, b) => b.date - a.date);
    }
    if (activeSort === "byAlphabetUp") {
      return filteredExpenses.sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }
    if (activeSort === "byAlphabetDown") {
      return filteredExpenses.sort((a, b) =>
        b.description.localeCompare(a.description)
      );
    }
    if (activeSort === "byAmountUp") {
      return filteredExpenses.sort((a, b) => a.amount - b.amount);
    }
    if (activeSort === "byAmountDown") {
      return filteredExpenses.sort((a, b) => b.amount - a.amount);
    }
  }
);

export const selectBalancePeriodExpenses = createSelector(
  [selectAllExpenses, selectBalancePeriod],
  (expenses, datePeriod) => {
    return expenses.filter(
      (expense) =>
        expense.date >= new Date(datePeriod.startDate).getTime() &&
        expense.date <= new Date(datePeriod.endDate).getTime()
    );
  }
);

export const periodExpensesCateg = createSelector(
  selectBalancePeriodExpenses,
  (expenses) => {
    const categorySummaries = expenses.reduce((summary, expense) => {
      const { category, amount } = expense;
      if (!summary[category]) {
        summary[category] = { category, sum: 0, id: category };
      }
      summary[category].sum += amount;
      return summary;
    }, {});

    return Object.values(categorySummaries);
  }
);

export const expensesSum = createSelector(
  periodExpensesCateg,
  (expCateg) => {
      return expCateg.reduce((total, current) => total + current.sum, 0)
  }
);

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
          new Date(income.date).getFullYear() === activeDropdowns.selectedYear
      );
    }
    if (
      activeDropdowns.selectedCategory !== "Все категории" &&
      activeDropdowns.selectedYear === "Все года"
    ) {
      return allIncomes.filter(
        (income) => income.category === activeDropdowns.selectedCategory
      );
    }
    if (
      activeDropdowns.selectedCategory !== "Все категории" &&
      activeDropdowns.selectedYear !== "Все года"
    ) {
      return allIncomes
        .filter(
          (income) => income.category === activeDropdowns.selectedCategory
        )
        .filter(
          (income) =>
            new Date(income.date).getFullYear() === activeDropdowns.selectedYear
        );
    }
  }
);

export const selectActiveSortIncomes = (state) => state.sortIncomes;

export const selectByDropdownsAndSortedIncomes = createSelector(
  [selectIncomesByDropdowns, selectActiveSortIncomes],
  ([...filteredIncomes], activeSort) => {
    if (activeSort === "byDateUp") {
      return filteredIncomes.sort((a, b) => a.date - b.date);
    }
    if (activeSort === "byDateDown") {
      return filteredIncomes.sort((a, b) => b.date - a.date);
    }
    if (activeSort === "byAlphabetUp") {
      return filteredIncomes.sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    }
    if (activeSort === "byAlphabetDown") {
      return filteredIncomes.sort((a, b) =>
        b.description.localeCompare(a.description)
      );
    }
    if (activeSort === "byAmountUp") {
      return filteredIncomes.sort((a, b) => a.amount - b.amount);
    }
    if (activeSort === "byAmountDown") {
      return filteredIncomes.sort((a, b) => b.amount - a.amount);
    }
  }
);

export const selectBalancePeriodIncomes = createSelector(
  [selectAllIncomes, selectBalancePeriod],
  (incomes, datePeriod) => {
    return incomes.filter(
      (income) =>
        income.date >= new Date(datePeriod.startDate).getTime() &&
        income.date <= new Date(datePeriod.endDate).getTime()
    );
  }
);

export const periodIncomesCateg = createSelector(
  selectBalancePeriodIncomes,
  (incomes) => {
    const categorySummaries = incomes.reduce((summary, income) => {
      const { category, amount } = income;
      if (!summary[category]) {
        summary[category] = { category, sum: 0, id: category };
      }
      summary[category].sum += amount;
      return summary;
    }, {});

    return Object.values(categorySummaries);
  }
);

export const incomesSum = createSelector(
  periodIncomesCateg,
  (incCateg) => {
      return incCateg.reduce((total, current) => total + current.sum, 0)
  }
);

