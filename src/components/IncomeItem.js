import styled from "styled-components";
import { Button } from "./Button";
import { Flex } from "./UI/Flex";
import { FlexWrap } from "./UI/FlexWrap";
import { useState } from "react";
import { Input } from "./Input";
import { Text } from "./UI/Text";
import { useDispatch } from "react-redux";
import { removeIncome, editIncome } from "../store/incomesSlice";

const StyledDateBlock = styled.div`
  border: 2px solid #fff;
  width: 100px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(228, 233, 240, 0.5);
   @media (max-width: 390px) {
    width: 100%;
    flex-direction: row;
    gap: 5px;
    padding: 10px;
  }
`;
const StyledText = styled.div`
  font-weight: inherit;
`;
const StyledDescripBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  margin: 10px 5px;
`;

const StyledFlexGrow = styled.div`
  flex: 1;
`;

const StyledPriceBlock = styled(StyledDateBlock)`
  padding: 5px;
  font-size: 20px;
`;
const StyledRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 130px;
   @media (max-width: 390px) {
    width: 100%;
  }
`;

export const IncomeItem = (props) => {
  const dispatch = useDispatch();
  const [incomeDescription, setIncomeDescription] = useState(
    props.data.description
  );

  const incomeDescriptionHandler = (e) => {
    setIncomeDescription(e.target.value);
  };
  const month = new Date(props.data.date).toLocaleString("ru-Ru", {
    month: "long",
  });
  const year = new Date(props.data.date).getFullYear();
  const day = new Date(props.data.date).toLocaleString("ru-Ru", {
    day: "2-digit",
  });
  const editHandler = () => {
    dispatch(
      editIncome({
        id: props.data.id,
        description: incomeDescription,
      })
    );
  };

  const removeHandler = () => {
    dispatch(removeIncome(props.data.id));
  };

  return (
    <Flex $pb="10px" $pr="10px" $pt="10px" $pl="10px">
      <StyledDateBlock>
        <StyledText>{day}</StyledText>
        <StyledText>{month}</StyledText>
        <StyledText>{year}</StyledText>
      </StyledDateBlock>
      <StyledFlexGrow>
        <StyledDescripBlock>
          {props.data.isEdditing ? (
            <Input
              value={incomeDescription}
              onChange={incomeDescriptionHandler}
            />
          ) : (
            props.data.description
          )}
        </StyledDescripBlock>
        <FlexWrap>
          <Button $bgim="none" size="m" onClick={editHandler}>
            {props.data.isEdditing ? "Ok" : "Редактировать"}
          </Button>
          <Button $bgim="none" size="m" onClick={removeHandler}>
            Удалить
          </Button>
        </FlexWrap>
      </StyledFlexGrow>
      <StyledRightBlock>
        <StyledPriceBlock>{props.data.amount} р.</StyledPriceBlock>
        <Text>{props.data.category}</Text>
      </StyledRightBlock>
    </Flex>
  );
};
