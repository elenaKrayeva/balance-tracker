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
import { ExpenseDropdown1 } from "../../mocks/index"; // в форму тоже из стейта категорий
import { changeCategory, changeYear } from "../../store/filterExpensesSlice";
import {
  selectExpensesByDropdowns,
  selectActiveDropdowns,
} from "../../store/selectors";

export const Expenses = () => {
  const expenses = useSelector(selectExpensesByDropdowns);
  const filterExpenses = useSelector(selectActiveDropdowns);
  console.log(filterExpenses);

  const [modalActive, setModalActive] = useState(false);

  const YearsDropdown = [
    "Все года",
    ...new Set(expenses.map((data) => new Date(data.date).getFullYear())),
  ];

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
            selected={filterExpenses.selectedCategory}
            setSelected={changeCategory}
          />
          <Dropdown
            options={YearsDropdown}
            selected={filterExpenses.selectedYear}
            setSelected={changeYear}
          />
        </Flex>

        {expenses.length === 0 ? (
          <AbsentData>Расходов нет</AbsentData>
        ) : (
          expenses.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} />
          ))
        )}
      </ExpensesBlock>
    </>
  );
};
