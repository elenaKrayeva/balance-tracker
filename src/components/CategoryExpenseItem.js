import styled from "styled-components";
import { Flex } from "./UI/Flex";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { removeExpenseCategory } from "../store/expensesCategoriesSlice";
import { useSelector } from "react-redux";
import { selectAllExpenses } from "../store/selectors";
import { Modal } from "./Modal";
import { useState } from "react";
import { Text } from "./UI/Text";

const Wrapper = styled.div`
  font-weight: 500;
  font-size: 16px;
  flex: 1;
`;

export const CategoryExpenseItem = ({ children, id }) => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const expensesArr = useSelector(selectAllExpenses);

  const removeHandler = () => {
    const filteredArr = expensesArr.filter(
      (expense) => expense.category === children
    );
    if (filteredArr.length > 0) {
      setModalActive(true);
      return;
    }
    dispatch(removeExpenseCategory({ id }));
  };

  return (
    <>
      {modalActive && (
        <Modal setModalActive={setModalActive}>
          <Flex $justify="center" $align="center" $mb="0">
            <Text>
              Невозможно удалить категорию. Удалите сперва присутствующие в ней
              расходы.
            </Text>
            <Button size="m" onClick={() => setModalActive(false)}>
              Ok
            </Button>
          </Flex>
        </Modal>
      )}
      <Flex $justify="space-between" $align="center" $pl="5px" $pr="5px">
        <Wrapper>{children}</Wrapper>
        <Button size="s" onClick={removeHandler}>
          Удалить
        </Button>
      </Flex>
    </>
  );
};
