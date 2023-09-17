import { useState } from "react";
import { IncomesBlock } from "./incomes.style";
import { Flex } from "../../components/UI/Flex";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { IncomeItem } from "../../components/IncomeItem";
import { Modal } from "../../components/Modal";
import { AbsentData } from "../../components/AbsentData";
import { FormForAdding } from "../../components/FormForAdding";
import {
  selectByDropdownsAndSortedIncomes,
  selectActiveDropdownsIncomes,
} from "../../store/selectors";
import { changeCategory, changeYear } from "../../store/filterIncomesSlice";
import { useSelector, useDispatch } from "react-redux";
import { addIncome } from "../../store/incomesSlice";
import { Sort } from "../../components/Sort";
import { changeSortIncomes } from "../../store/sortIncomesSlice";
import { Text } from "../../components/UI/Text";

export const Incomes = () => {
  const dispatch = useDispatch();
  const incomes = useSelector(selectByDropdownsAndSortedIncomes);
  const filterIncomes = useSelector(selectActiveDropdownsIncomes);
  const categories = useSelector(
    (state) => state.incomesCategories.incomesCategArr
  );
  const activeSortBtn = useSelector((state) => state.sortIncomes);

  const categoriesForFormAdding = [
    ...new Set(categories.map((category) => category.name)),
  ];

  const categoriesDropdown = ["Все категории", ...categoriesForFormAdding];

  const YearsDropdown = [
    "Все года",
    ...new Set(incomes.map((data) => new Date(data.date).getFullYear())),
  ];

  const [modalActive, setModalActive] = useState(false);

  const sum = incomes.reduce((sum, current) => sum + current.amount, 0);

  const sortByButtonName = ({target: {name}}) => {
    dispatch(changeSortIncomes(name))
  };

  return (
    <>
      <IncomesBlock>
        {modalActive && (
          <Modal setModalActive={setModalActive}>
            <FormForAdding
              options={categoriesForFormAdding}
              setModalActive={setModalActive}
              onAddItem={({ inputDate, selected, inputAmount, inputName }) =>
                dispatch(
                  addIncome({ inputDate, selected, inputAmount, inputName })
                )
              }
            ></FormForAdding>
          </Modal>
        )}
        <Flex $justify="center">
          <Button size="l" onClick={() => setModalActive(true)}>
            добавить новый доход
          </Button>
        </Flex>
        <Flex $justify="space-between">
          <Dropdown
            options={categoriesDropdown}
            selectedOption={filterIncomes.selectedCategory}
            onOptionItemClick={(option) => dispatch(changeCategory(option))}
          />
          <Dropdown
            options={YearsDropdown}
            selectedOption={filterIncomes.selectedYear}
            onOptionItemClick={(option) => dispatch(changeYear(option))}
          />
        </Flex>
        <Sort
          sortByButtonName={sortByButtonName}
          activeSortBtn={activeSortBtn}
          $bgim='none'
        />
        <Flex>
          <Text $align="right" $fw="500">
            Всего доходов: {sum} р.
          </Text>
        </Flex>
        {incomes.length === 0 ? (
          <AbsentData>Доходов нет</AbsentData>
        ) : (
          incomes.map((income) => <IncomeItem key={income.id} data={income} />)
        )}
      </IncomesBlock>
    </>
  );
};
