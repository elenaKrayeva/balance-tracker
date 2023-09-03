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
import {
  periodExpensesCateg,
  periodIncomesCateg,
  expensesSum,
  incomesSum,
} from "../../store/selectors";
import {
  getTodayDate,
  getOneMonthAgoDate,
  getOneYearAgoDate,
} from "../../utils";

export const Balance = () => {
  const dispatch = useDispatch();
  const expenses = useSelector(periodExpensesCateg); //{category: '', sum: 0}
  const incomes = useSelector(periodIncomesCateg);
  const expSum = useSelector(expensesSum);
  const incSum = useSelector(incomesSum);

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
      <Flex $gap="10px" $shadow="none" $bgc="transparent" $justify="center">
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
            <Text $pb="0">Период с:</Text>
            <Input
              $width="90%"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <Text $pb="0">Период по:</Text>
            <Input
              $width="90%"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Flex>
        </Flex>
        <Flex $mwidth="300px" $pt="8px" $pl="8px" $pr="8px" $pb="8px" $mb="0">
          <Text $bgc="rgba(148, 187, 233, 1)">Доходы за период:</Text>
          <Text $bgc="white" $mb="10px">
            {incSum} р.
          </Text>
          <Text $bgc="rgba(238, 174, 202, 1)">Расходы за период:</Text>
          <Text $bgc="white" $mb="10px">
            {expSum} р.
          </Text>
          <Text $bgi="radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)">
            Баланс за период:
          </Text>
          <Text $bgc="white">{incSum - expSum} р.</Text>
        </Flex>
      </Flex>

      <Flex $pb="10px" $pr="10px" $pt="10px" $pl="10px">
        <Text $bgc="rgba(238, 174, 202, 1)">Расходы по категориям</Text>
        <CategoryBlock>
          {expenses.map((item) => (
            <BalanceItem key={item.id} {...item} />
          ))}
        </CategoryBlock>
      </Flex>
      <Flex $pb="10px" $pr="10px" $pt="10px" $pl="10px">
        <Text $bgc="rgba(148, 187, 233, 1)">Доходы по категориям</Text>
        <CategoryBlock>
          {incomes.map((item) => (
            <BalanceItem key={item.id} {...item} />
          ))}
        </CategoryBlock>
      </Flex>
    </BalanceBlock>
  );
};
