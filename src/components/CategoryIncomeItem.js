import styled from "styled-components";
import { Flex } from "./UI/Flex";
import { Button } from "./Button";
import { useDispatch } from "react-redux";
import { removeIncomeCategory } from "../store/incomesCategoriesSlice";
import { useSelector } from "react-redux";
import { selectAllIncomes } from "../store/selectors";
import { Modal } from "./Modal";
import { useState } from "react";
import { Text } from "./UI/Text";

const Wrapper = styled.div`
  font-weight: 500;
  font-size: 16px;
  flex: 1;
`;

export const CategoryIncomeItem = ({ children, id }) => {
  const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const incomesArr = useSelector(selectAllIncomes);

  const removeHandler = () => {
    const filteredArr = incomesArr.filter(
      (income) => income.category === children
    );
    if (filteredArr.length > 0) {
      setModalActive(true);
      return;
    }
    dispatch(removeIncomeCategory({ id }));
  };

  return (
    <>
      {modalActive && (
        <Modal setModalActive={setModalActive}>
          <Flex $justify="center" $align="center" $mb="0">
            <Text>
              Невозможно удалить категорию. Удалите сперва присутствующие в ней
              доходы.
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
