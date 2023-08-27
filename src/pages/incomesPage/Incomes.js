import { useState } from "react";
import { IncomesBlock } from "./incomes.style";
import { Flex } from "../../components/UI/Flex";
import { Button } from "../../components/Button";
import { Dropdown } from "../../components/Dropdown";
import { IncomesDropdown } from "../../mocks/index";
import { IncomeItem } from "../../components/IncomeItem";
import { INCOMESDATA } from "../../mocks/index";
import { NewIncome } from "../../components/NewIncome";
import { Modal } from "../../components/Modal";
import { AbsentData } from "../../components/AbsentData";

export const Incomes = () => {
  const [selectedCategory, setSelectedCategory] =
    useState("Выберите категорию");
  const [selectedYear, setSelectedYear] = useState("Выберите год");
  const [incomes, setIncomes] = useState(INCOMESDATA);
  const [modalActive, setModalActive] = useState(false);

  const YearsDropdown = [
    "Все года",
    ...new Set(incomes.map((data) => data.date.getFullYear())),
  ];

  const addIncomeHandler = (incomes) => {
    setIncomes((prevIncome) => {
      return [incomes, ...prevIncome];
    });
  };

  const removeIncomeHandler = (incomeId) => {
    setIncomes(incomes.filter((income) => income.id !== incomeId));
  };

  const editIncomeHandler = (incomeId, newDescription) => {
    setIncomes((prevIncomes) => {
      const incomeToEdit = prevIncomes.find(({ id }) => id === incomeId);
      incomeToEdit.isEdditing = !incomeToEdit.isEdditing;
      incomeToEdit.description = newDescription;
      return [...prevIncomes];
    });
  };

  const filteredByYearArr = incomes.filter(
    (income) => income.date.getFullYear() === selectedYear
  );
  const filteredByCategoryArr = incomes.filter(
    (income) => income.category === selectedCategory
  );

  const filteredByCategAndYearArr = filteredByCategoryArr.filter(
    (income) => income.date.getFullYear() === selectedYear
  );

  

  return (
    <>
      <IncomesBlock>
        {modalActive && (
          <Modal setModalActive={setModalActive}>
            <NewIncome
              onAddIncome={addIncomeHandler}
              setModalActive={setModalActive}
            ></NewIncome>
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
          incomes.length === 0 && <AbsentData>Расходов нет</AbsentData>}

        {selectedCategory === "Все категории" &&
          selectedYear === "Все года" &&
          incomes.length > 0 &&
          incomes.map((income) => (
            <IncomeItem
              key={income.id}
              data={income}
              removeIncome={removeIncomeHandler}
              editIncome={editIncomeHandler}
            ></IncomeItem>
          ))}

        {selectedCategory === "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByYearArr.length > 0 &&
          filteredByYearArr.map((income) => (
            <IncomeItem
              key={income.id}
              data={income}
              removeIncome={removeIncomeHandler}
              editIncome={editIncomeHandler}
            ></IncomeItem>
          ))}

        {selectedCategory === "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByYearArr.length === 0 && (
            <AbsentData>Доходов нет</AbsentData>
          )}

        {selectedCategory !== "Все категории" &&
          selectedYear === "Все года" &&
          filteredByCategoryArr.length > 0 &&
          filteredByCategoryArr.map((income) => (
            <IncomeItem
              key={income.id}
              data={income}
              removeIncome={removeIncomeHandler}
              editIncome={editIncomeHandler}
            ></IncomeItem>
          ))}

        {selectedCategory !== "Все категории" &&
          selectedYear === "Все года" &&
          filteredByCategoryArr.length === 0 && (
            <AbsentData>Доходов нет</AbsentData>
          )}

        {selectedCategory !== "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByCategAndYearArr.length > 0 &&
          filteredByCategAndYearArr.map((income) => (
            <IncomeItem
              key={income.id}
              data={income}
              removeIncome={removeIncomeHandler}
              editIncome={editIncomeHandler}
            ></IncomeItem>
          ))}

        {selectedCategory !== "Все категории" &&
          selectedYear !== "Все года" &&
          filteredByCategAndYearArr.length === 0 && (
            <AbsentData>Доходов нет</AbsentData>
          )}
      </IncomesBlock>
    </>
  );
};
