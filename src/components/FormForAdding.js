import styled from "styled-components";
import { Input } from "./Input";
import { Button } from "./Button";
import { FlexWrap } from "./UI/FlexWrap";
import { useState } from "react";
import { addExpense } from "../store/expensesSlice";
import { useDispatch } from "react-redux";
import { Dropdown } from "./Dropdown";

const StyledFormForAdding = styled.form`
  background: #e4e9f0;
  border: 2px solid #fff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.4);
  margin: 20px 20px;
`;

const StyledInputBlock = styled.div`
  font-weight: 400;
`;

const StyledLabel = styled.label`
  display: block;
  padding: 8px 0;
`;

export const FormForAdding = ({ setModalActive, options }) => {
  const [selected, setSelected] = useState("Выберите категорию");
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const dispatch = useDispatch();

  const inputNameHandler = (event) => {
    setInputName(event.target.value);
  };
  const inputAmountHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const inputDateHandler = (event) => {
    setInputDate(event.target.value);
  };

  const checkFormHandler = (event) => {
    if (selected === "Выберите категорию") event.preventDefault();
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!inputName.trim().length) return;

    dispatch(addExpense({ inputDate, selected, inputAmount, inputName }));
    setSelected("Выберите категорию");
    setInputName("");
    setInputAmount("");
    setInputDate("");
    setModalActive(false);
  };

  return (
    <StyledFormForAdding onSubmit={submitFormHandler}>
      <FlexWrap>
        <Dropdown
          options={options}
          selectedOption={selected} //state categories
          onOptionItemClick={setSelected}
        ></Dropdown>
      </FlexWrap>

      <StyledInputBlock>
        <StyledLabel>Название</StyledLabel>
        <Input
          type="text"
          value={inputName}
          onChange={inputNameHandler}
          required
        ></Input>
      </StyledInputBlock>
      <StyledInputBlock>
        <StyledLabel>Сумма</StyledLabel>
        <Input
          type="number"
          min="0.01"
          step="0.01"
          value={inputAmount}
          onChange={inputAmountHandler}
          required
        ></Input>
      </StyledInputBlock>
      <StyledInputBlock>
        <StyledLabel>Дата</StyledLabel>
        <Input
          type="date"
          value={inputDate}
          onChange={inputDateHandler}
          required
        ></Input>
      </StyledInputBlock>
      <FlexWrap>
        <Button type="submit" onClick={checkFormHandler}>
          Добавить
        </Button>
        <Button onClick={() => setModalActive(false)}>Отмена</Button>
      </FlexWrap>
    </StyledFormForAdding>
  );
};
