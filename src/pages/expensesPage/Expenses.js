import { useState } from "react";
import { ExpensesBlock } from "./expenses.style";
import { Flex } from "../../components/UI/Flex";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { ExpenseDropdown } from "../../mocks/index"; // массив категорий из стейта категорий
import { ExpenseItem } from "../../components/ExpenseItem";
import { Modal } from "../../components/Modal";
import { AbsentData } from "../../components/AbsentData";
import { useSelector } from "react-redux";
import { FormForAdding } from "../../components/FormForAdding";
import { ExpenseDropdown1 } from "../../mocks/index";

export const Expenses = () => {
  const expenses = useSelector((state) => state.expenses.expensesArr);
  const [selectedCategory, setSelectedCategory] =
    useState("Выберите категорию");
  const [selectedYear, setSelectedYear] = useState("Выберите год");
  const [modalActive, setModalActive] = useState(false);

  const YearsDropdown = [
    "Все года",
    ...new Set(expenses.map((data) => new Date(data.date).getFullYear())),
  ];

  /* const filteredByYearArr = expenses.filter(
    (expense) => new Date(expense.date).getFullYear() === selectedYear
  );
  const filteredByCategoryArr = expenses.filter(
    (expense) => expense.category === selectedCategory
  );

  const filteredByCategAndYearArr = filteredByCategoryArr.filter(
    (expense) => new Date(expense.date).getFullYear() === selectedYear
  ); */

  
  return (
    <>
      <ExpensesBlock>
        {modalActive && (
          <Modal setModalActive={setModalActive}>
            <FormForAdding
              options={ExpenseDropdown1}
              setModalActive={setModalActive}
            ></FormForAdding>
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

        {/* {selectedCategory === "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByYearArr.length > 0 &&
          filteredByYearArr.map((expense) => (
            <ExpenseItem
              key={expense.id}
              data={expense}
              removeExpense={removeExpenseHandler}
              editExpense={editExpenseHandler}
            ></ExpenseItem>
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
            <ExpenseItem
              key={expense.id}
              data={expense}
              removeExpense={removeExpenseHandler}
              editExpense={editExpenseHandler}
            ></ExpenseItem>
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
            <ExpenseItem
              key={expense.id}
              data={expense}
              removeExpense={removeExpenseHandler}
              editExpense={editExpenseHandler}
            ></ExpenseItem>
          ))}

        {selectedCategory !== "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByCategAndYearArr.length === 0 && (
            <AbsentData>Расходов нет</AbsentData>
          )} */}
      </ExpensesBlock>
    </>
  );
};
