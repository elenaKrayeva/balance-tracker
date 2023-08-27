import styled from "styled-components";
import { Button } from "./Button";
import { Flex } from "./UI/Flex";
import { FlexWrap } from "./UI/FlexWrap";
import { useState } from "react";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { removeExpense, editExpense } from "../store/expensesSlice";


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
  padding: 10px;
  font-size: 20px;
`;
const StyledRightBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 130px;
`;

export const ExpenseItem = (props) => {
  const dispatch = useDispatch();

  const [expenseDescription, setExpenseDescription] = useState(
    props.data.description
  );

  const expenseDescriptionHandler = (e) => {
    setExpenseDescription(e.target.value);
  };
  const month = new Date(props.data.date).toLocaleString("ru-Ru", {
    month: "long",
  });
  const year = new Date(props.data.date).getFullYear();
  const day = new Date(props.data.date).toLocaleString("ru-Ru", {
    day: "2-digit",
  });
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
              value={expenseDescription}
              onChange={expenseDescriptionHandler}
            />
          ) : (
            props.data.description
          )}
        </StyledDescripBlock>
        <FlexWrap>
          <Button
            size="m"
            onClick={() =>
              dispatch(
                editExpense({
                  id: props.data.id,
                  description: expenseDescription
                })
              )
            }
          >
            {props.data.isEdditing ? "Ok" : "Редактировать"}
          </Button>
          <Button
            size="m"
            onClick={() => dispatch(removeExpense(props.data.id))}
          >
            Удалить
          </Button>
        </FlexWrap>
      </StyledFlexGrow>
      <StyledRightBlock>
        <StyledPriceBlock>{props.data.amount} р.</StyledPriceBlock>
        <div>{props.data.category}</div>
      </StyledRightBlock>
    </Flex>
  );
};
