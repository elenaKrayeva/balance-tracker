import { useState } from "react";
import { ExpensesBlock } from "./expenses.style";
import { Flex } from "../../components/Flex";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { ExpenseDropdown } from "../../mocks/index";
import { ExpenseItem } from "../../components/ExpenseItem";
import { EXPENSESDATA } from "../../mocks/index";
import { NewExpense } from "../../components/NewExpense";
import { Modal } from "../../components/Modal";
import { AbsentData } from "../../components/AbsentData";


export const Expenses = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Выберите категорию");
  const [selectedYear, setSelectedYear] = useState("Выберите год");
  const [expenses, setExpenses] = useState(EXPENSESDATA);
  const [modalActive, setModalActive] = useState(false);

  const YearsDropdown = [
    "Все года",
    ...new Set(expenses.map((data) => data.date.getFullYear())),
  ];

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  const filteredByYearArr = expenses.filter(
    (expense) => expense.date.getFullYear() === selectedYear
  );
  const filteredByCategoryArr = expenses.filter(
    (expense) => expense.category === selectedCategory
  );

  const filteredByCategAndYearArr = filteredByCategoryArr.filter(
    (expense) => expense.date.getFullYear() === selectedYear
  );

  return (
    <>
      <ExpensesBlock>
        {modalActive && (
          <Modal
            setModalActive={setModalActive}
          >
            <NewExpense onAddExpense={addExpenseHandler} setModalActive={setModalActive}
            ></NewExpense>
          </Modal>
        )}
        <Flex $justify="center">
          <Button size="l" onClick={() => setModalActive(true)}>
            добавить новый расход
          </Button>
        </Flex>
        <Flex $justify="space-between">
          <Dropdown
            options={ExpenseDropdown}
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <Dropdown
            options={YearsDropdown}
            selected={selectedYear}
            setSelected={setSelectedYear}
          />
        </Flex>

        {selectedCategory === "Все категории" &&
          selectedYear === "Все года" &&
          expenses.length === 0 && <AbsentData>Расходов нет</AbsentData>}

        {selectedCategory === "Все категории" &&
          selectedYear === "Все года" &&
          expenses.length > 0 &&
          expenses.map((expense) => (
            <ExpenseItem key={expense.id} data={expense}></ExpenseItem>
          ))}

        {selectedCategory === "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByYearArr.length > 0 &&
          filteredByYearArr.map((expense) => (
            <ExpenseItem key={expense.id} data={expense}></ExpenseItem>
          ))}

        {selectedCategory === "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByYearArr.length === 0 && (
            <AbsentData>Расходов нет</AbsentData>
          )}

        {selectedCategory !== "Все категории" &&
          selectedYear === "Все года" &&
          filteredByCategoryArr.length > 0 &&
          filteredByCategoryArr.map((expense) => (
            <ExpenseItem key={expense.id} data={expense}></ExpenseItem>
          ))}

        {selectedCategory !== "Все категории" &&
          selectedYear === "Все года" &&
          filteredByCategoryArr.length === 0 && (
            <AbsentData>Расходов нет</AbsentData>
          )}

        {selectedCategory !== "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByCategAndYearArr.length > 0 &&
          filteredByCategAndYearArr.map((expense) => (
            <ExpenseItem key={expense.id} data={expense}></ExpenseItem>
          ))}

        {selectedCategory !== "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByCategAndYearArr.length === 0 && (
            <AbsentData>Расходов нет</AbsentData>
          )}
      </ExpensesBlock>
    </>
  );
};
