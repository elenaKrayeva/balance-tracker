import React, { useEffect, useState } from "react";
import { BalanceBlock, CategoryBlock, AmountBlock } from "./balance.style";
import { Input } from "../../components/Input";
import { Flex } from "../../components/UI/Flex";
import { Button } from "../../components/Button";
import { Text } from "../../components/UI/Text";
import { useSelector } from "react-redux";
import { BalanceItem } from "../../components/BalanceItem";
import { useDispatch } from "react-redux";
import { changeStartDate, changeEndDate } from "../../store/balanceSlice";
import { periodExpensesCateg, periodIncomesCateg } from "../../store/selectors";
import {
  getTodayDate,
  getOneMonthAgoDate,
  getOneYearAgoDate,
} from "../../utils";

export const Balance = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(periodExpensesCateg); //{category: '', sum: 0}
  const incomes = useSelector(periodIncomesCateg);
  console.log(expenses);
  console.log(incomes);
  const [startDate, setStartDate] = useState(getOneYearAgoDate());
  const [endDate, setEndDate] = useState(getTodayDate());

  useEffect(() => {
    filterByDateRange();
  }, [startDate, endDate]);

  const filterByDateRange = () => {
    dispatch(changeStartDate({ startDate }));
    dispatch(changeEndDate({ endDate }));
  };

  /*  const filterByDateRange = () => {
    if (!startDate || !endDate) {
      alert("Пожалуйста, выберите начальную и конечную даты.");
      return;
    }
    if (startDate > endDate) {
      alert("Период не выбран");
    } 
    dispatch(changeStartDate({ startDate }));
    dispatch(changeEndDate({ endDate }));
  }; */

  return (
    <BalanceBlock>
      <Flex $shadow="none" $justify="center" $bgc="transparent">
        <Flex
          $justify="center"
          $mwidth="300px"
          $mb="0"
          $pr="10px"
          $pl="10px"
          $pt="10px"
          $pb="10px"
        >
          <Text>Период с:</Text>
          <Input
            $width="90%"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <Text>Период по:</Text>
          <Input
            $width="90%"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Flex>
      </Flex>

      <Flex $pb="10px" $pr="10px" $pt="10px" $pl="10px">
        <CategoryBlock>
          {expenses.map((item) => (
            <BalanceItem key={item.id} data={item.category} />
          ))}
        </CategoryBlock>
        <AmountBlock>
          {expenses.map((item) => (
            <BalanceItem key={item.id} data={item.sum} />
          ))}
        </AmountBlock>
      </Flex>
      <Flex $pb="10px" $pr="10px" $pt="10px" $pl="10px">
        <CategoryBlock>
          {incomes.map((item) => (
            <BalanceItem key={item.id} data={item.category} />
          ))}
        </CategoryBlock>
        <AmountBlock>
          {incomes.map((item) => (
            <BalanceItem key={item.id} data={item.sum} />
          ))}
        </AmountBlock>
      </Flex>
    </BalanceBlock>
  );
};
