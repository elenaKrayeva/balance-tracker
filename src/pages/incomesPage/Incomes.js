import { useState } from "react";
import { IncomesBlock } from "./incomes.style";
import { Flex } from "../../components/UI/Flex";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { IncomesDropdown, IncomesDropdown1 } from "../../mocks/index";
import { IncomeItem } from "../../components/IncomeItem";
import { Modal } from "../../components/Modal";
import { AbsentData } from "../../components/AbsentData";
import { FormForAdding } from "../../components/FormForAdding";
import {
  selectIncomesByDropdowns,
  selectActiveDropdownsIncomes,
} from "../../store/selectors";
import { changeCategory, changeYear } from "../../store/filterIncomesSlice";
import { useSelector } from "react-redux";

export const Incomes = () => {
  const incomes = useSelector(selectIncomesByDropdowns);
  const filterIncomes = useSelector(selectActiveDropdownsIncomes);

  const [modalActive, setModalActive] = useState(false);

  const YearsDropdown = [
    "Все года",
    ...new Set(incomes.map((data) => new Date(data.date).getFullYear())),
  ];

  return (
    <>
      <IncomesBlock>
        {modalActive && (
          <Modal setModalActive={setModalActive}>
            <FormForAdding
              options={IncomesDropdown1}
              setModalActive={setModalActive}
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
            options={IncomesDropdown}
            selected={filterIncomes.selectedCategory}
            setSelected={changeCategory}
          />
          <Dropdown
            options={YearsDropdown}
            selected={filterIncomes.selectedYear}
            setSelected={changeYear}
          />
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
