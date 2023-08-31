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
  selectByDropdownsAndSorted,
  selectActiveDropdowns,
} from "../../store/selectors";
import { addExpense } from "../../store/expensesSlice";
import { EmptyBlock } from "../../components/UI/EmptyBlock";
import { changeSortExpenses } from "../../store/sortExpensesSlice";
import { Text } from "../../components/UI/Text";

export const Expenses = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(selectByDropdownsAndSorted);
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

  const sum = expenses.reduce((sum, current) => sum + current.amount, 0);

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <ExpensesBlock>
        {modalActive && (
          <Modal setModalActive={setModalActive}>
            <FormForAdding
              options={categoriesForFormAdding}
              setModalActive={setModalActive}
              onAddItem={({ inputDate, selected, inputAmount, inputName }) =>
                dispatch(
                  addExpense({ inputDate, selected, inputAmount, inputName })
                )
              }
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
        <Flex
          $justify="center"
          $direction="column"
          $align="center"
          $pt="10px"
          $pb="10px"
        >
          <Text $align="center" $fw="400">
            Сортировать по:
          </Text>
          <Flex $shadow="none" $mb='0'>
            <Button
              size="s"
              onClick={() => dispatch(changeSortExpenses("byAlphabetUp"))}
            >
              АЛФАВИТУ {String.fromCodePoint(0x1f815)}
            </Button>
            <Button
              size="s"
              onClick={() => dispatch(changeSortExpenses("byAlphabetDown"))}
            >
              АЛФАВИТУ {String.fromCodePoint(0x1f817)}
            </Button>
          </Flex>
          <Flex $shadow="none" $mb='0'>
            <Button
              size="s"
              onClick={() => dispatch(changeSortExpenses("byDateUp"))}
            >
              ДАТЕ {String.fromCodePoint(0x1f815)}
            </Button>
            <Button
              size="s"
              onClick={() => dispatch(changeSortExpenses("byDateDown"))}
            >
              ДАТЕ {String.fromCodePoint(0x1f817)}
            </Button>
          </Flex>
          <Flex $shadow="none" $mb='0'>
            <Button
              size="s"
              onClick={() => dispatch(changeSortExpenses("byAmountUp"))}
            >
              СТОИМОСТИ РАСХОДА {String.fromCodePoint(0x1f815)}
            </Button>
            <Button
              size="s"
              onClick={() => dispatch(changeSortExpenses("byAmountDown"))}
            >
              СТОИМОСТИ РАСХОДА {String.fromCodePoint(0x1f817)}
            </Button>
          </Flex>
        </Flex>
        <Flex>
          <Text $align="right" $fw="500">
            Всего расходов: {sum} р.
          </Text>
        </Flex>

        {expenses.length === 0 ? (
          <AbsentData>Расходов нет</AbsentData>
        ) : (
          expenses?.map((expense) => (
            <ExpenseItem key={expense.id} data={expense} />
          ))
        )}
      </ExpensesBlock>
    </>
  );
};
