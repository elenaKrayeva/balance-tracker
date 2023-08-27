import {
  AdmpanelBlock,
  LeftBlock,
  RightBlock,
  InputDiv,
  Text,
} from "./admpanel.style";
import { Flex } from "../../components/UI/Flex";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { EXPENSECATEGORIES, INCOMESCATEGORIES } from "../../mocks/index";
import { CategoryExpenseItem } from "../../components/CategoryExpenseItem";
import { CategoryIncomeItem } from "../../components/CategoryIncomeItem";

export const Admpanel = () => {
  const [inputIncome, setInputIncome] = useState("");
  const [inputExpense, setInputExpense] = useState("");
  const [expenseCategories, setExpenseCategories] = useState(EXPENSECATEGORIES);
  const [incomeCategories, setIncomeCategories] = useState(INCOMESCATEGORIES);

  const handleInputIncome = (e) => {
    setInputIncome(e.target.value);
  };
  const handleInputExpense = (e) => {
    setInputExpense(e.target.value);
  };
  const addIncomeCategoryHandler = () => {
    setIncomeCategories((prevIncome) => {
      return [
        ...prevIncome,
        {
          id: Date.now(),
          name: inputIncome,
          isEdditing: false,
        },
      ];
    });
    setInputIncome("");
  };
  const addExpenseCategoryHandler = () => {
    setExpenseCategories((prevExpense) => {
      return [
        ...prevExpense,
        {
          id: Date.now(),
          name: inputExpense,
          isEdditing: false,
        },
      ];
    });
    setInputExpense("");
  };

  const removeExpenseHandler = (expenseId) => {
    setExpenseCategories(
      expenseCategories.filter((expense) => expense.id !== expenseId)
    );
  };

  const removeIncomeHandler = (incomeId) => {
    setIncomeCategories(
      incomeCategories.filter((income) => income.id !== incomeId)
    );
  };

  return (
    <AdmpanelBlock>
      <LeftBlock>
        <Flex $direction="column">
          <Text>Добавить категорию ДОХОДОВ</Text>
          <InputDiv>
            <Input value={inputIncome} onChange={handleInputIncome} />
          </InputDiv>
          <Flex
            $justify="center"
            style={{ boxShadow: "none", marginBottom: "0" }}
          >
            <Button size="m" onClick={addIncomeCategoryHandler}>
              Добавить
            </Button>
          </Flex>
        </Flex>
        <Flex $direction="column">
          <Text> Категории доходов:</Text>
          {incomeCategories.map((categ) => (
            <CategoryIncomeItem
              key={categ.id}
              removeIncome={removeIncomeHandler}
              id={categ.id}
            >
              {categ.name}
            </CategoryIncomeItem>
          ))}
        </Flex>
      </LeftBlock>
      <RightBlock>
        <Flex $direction="column">
          <Text>Добавить категорию РАСХОДОВ</Text>
          <InputDiv>
            <Input value={inputExpense} onChange={handleInputExpense} />
          </InputDiv>
          <Flex
            $justify="center"
            style={{ boxShadow: "none", marginBottom: "0" }}
          >
            <Button size="m" onClick={addExpenseCategoryHandler}>
              Добавить
            </Button>
          </Flex>
        </Flex>
        <Flex $direction="column">
          <Text> Категории расходов:</Text>
          {expenseCategories.map((categ) => (
            <CategoryExpenseItem
              key={categ.id}
              removeExpense={removeExpenseHandler}
              id={categ.id}
            >
              {categ.name}
            </CategoryExpenseItem>
          ))}
        </Flex>
      </RightBlock>
    </AdmpanelBlock>
  );
};
