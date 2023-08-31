import { useState } from "react";
import { ExpensesBlock } from "./expenses.style";
import { Flex } from "../../components/UI/Flex";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { ExpenseItem } from "../../components/ExpenseItem";
import { Modal } from "../../components/Modal";
import { AbsentData } from "../../components/AbsentData";
import { useSelector, useDispatch } from "react-redux";
import { FormForAdding } from "../../components/FormForAdding";
import { changeCategory, changeYear } from "../../store/filterExpensesSlice";
import {
  selectExpensesByDropdowns,
  selectActiveDropdowns,
} from "../../store/selectors";

export const Expenses = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(selectExpensesByDropdowns);
  const filterExpenses = useSelector(selectActiveDropdowns);
  const categories = useSelector(
    (state) => state.expensesCategories.expensesCategArr
  );

  const categoriesForFormAdding = [
    ...new Set(categories.map((category) => category.name)),
  ];

  const categoriesDropdown = ["Все категории", ...categoriesForFormAdding];

  const YearsDropdown = [
    "Все года",
    ...new Set(expenses.map((data) => new Date(data.date).getFullYear())),
  ];

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <ExpensesBlock>
        {modalActive && (
          <Modal setModalActive={setModalActive}>
            <FormForAdding
              options={categoriesForFormAdding}
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
            options={categoriesDropdown}
            selectedOption={filterExpenses.selectedCategory}
            onOptionItemClick={(option) => dispatch(changeCategory(option))}
          />
          <Dropdown
            options={YearsDropdown}
            selectedOption={filterExpenses.selectedYear}
            onOptionItemClick={(option) => dispatch(changeYear(option))}
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
