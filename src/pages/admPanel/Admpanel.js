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
import { CategoryExpenseItem } from "../../components/CategoryExpenseItem";
import { CategoryIncomeItem } from "../../components/CategoryIncomeItem";
import { useSelector, useDispatch } from "react-redux";
import { addExpenseCategory } from "../../store/expensesCategoriesSlice";
import { addIncomeCategory } from "../../store/incomesCategoriesSlice";

export const Admpanel = () => {
  const expenseCategories = useSelector(
    (state) => state.expensesCategories.expensesCategArr
  );
  const incomeCategories = useSelector(
    (state) => state.incomesCategories.incomesCategArr
  );

  const dispatch = useDispatch();

  const [inputIncome, setInputIncome] = useState("");
  const [inputExpense, setInputExpense] = useState("");

  const handleInputIncome = (e) => {
    setInputIncome(e.target.value);
  };
  const handleInputExpense = (e) => {
    setInputExpense(e.target.value);
  };

  const addIncomeCategoryHandler = () => {
    if (!inputIncome.trim().length) return;
    dispatch(addIncomeCategory({ inputIncome }));
    setInputIncome("");
  };

  const addExpenseCategoryHandler = () => {
    if (!inputExpense.trim().length) return;
    dispatch(addExpenseCategory({ inputExpense }));
    setInputExpense("");
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
            $shadow='none'
            $mb='0'
          >
            <Button size="m" onClick={addIncomeCategoryHandler}>
              Добавить
            </Button>
          </Flex>
        </Flex>
        <Flex $direction="column" $bgc='transparent' $shadow='none'>
          <Text> Категории доходов:</Text>
          {incomeCategories.map((categ) => (
            <CategoryIncomeItem key={categ.id} id={categ.id}>
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
            $shadow='none'
            $mb='0'
          >
            <Button size="m" onClick={addExpenseCategoryHandler}>
              Добавить
            </Button>
          </Flex>
        </Flex>
        <Flex $direction="column" $bgc='transparent' $shadow='none'>
          <Text> Категории расходов:</Text>
          {expenseCategories.map((categ) => (
            <CategoryExpenseItem key={categ.id} id={categ.id}>
              {categ.name}
            </CategoryExpenseItem>
          ))}
        </Flex>
      </RightBlock>
    </AdmpanelBlock>
  );
};
