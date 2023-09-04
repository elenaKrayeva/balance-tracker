import React, { useEffect, useState } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { BalanceBlock, CategoryBlock, ChartBlock } from "./balance.style";
import { Input } from "../../components/Input";
import { Flex } from "../../components/UI/Flex";
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
  generateRgbColors,
} from "../../utils";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

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

  const expBarCat = expenses.map((expense) => expense.category);
  const expBarSum = expenses.map((expense) => expense.sum);
  const incBarCat = incomes.map((income) => income.category);
  const incBarSum = incomes.map((income) => income.sum);

  const data = {
    labels: ["Доходы", "Расходы"],
    datasets: [
      {
        label: "Баланс",
        data: [incSum, expSum],
        backgroundColor: ["rgba(148, 187, 233, 1)", "rgba(238, 174, 202, 1)"],
        borderColor: ["rgba(148, 187, 233, 1)", "rgba(238, 174, 202, 1)"],
      },
    ],
  };

  const options = {
    responsive: true,
  };

  const dataBarExp = {
    labels: expBarCat,
    datasets: [
      {
        label: "Расходы по категориям",
        data: expBarSum,
        backgroundColor: generateRgbColors(expBarCat.length),
      },
    ],
  };

  const optionsBarExp = {
    responsive: true,
  };

  const dataBarInc = {
    labels: incBarCat,
    datasets: [
      {
        label: "Доходы по категориям",
        data: incBarSum,
        backgroundColor: generateRgbColors(incBarCat.length),
      },
    ],
  };

  const optionsBarInc = {
    responsive: true,
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
        <Flex $pb="10px">
          <ChartBlock $width="300px">
            <Doughnut data={data} options={options}></Doughnut>
          </ChartBlock>
        </Flex>
      </Flex>
      <Flex $pb="10px" $pr="10px" $pt="10px" $pl="10px">
        <Text $bgc="rgba(148, 187, 233, 1)">Доходы по категориям</Text>
        <CategoryBlock>
          {incomes.map((item) => (
            <BalanceItem key={item.id} {...item} />
          ))}
        </CategoryBlock>
      </Flex>

      <Flex $pb="10px" $pr="10px" $pt="10px" $pl="10px">
        <Text $bgc="rgba(238, 174, 202, 1)">Расходы по категориям</Text>
        <CategoryBlock>
          {expenses.map((item) => (
            <BalanceItem key={item.id} {...item} />
          ))}
        </CategoryBlock>
      </Flex>
      <Flex>
        <ChartBlock $width='50%'>
          <Bar data={dataBarInc} options={optionsBarInc}></Bar>
        </ChartBlock>
        <ChartBlock $width='50%'>
          <Bar data={dataBarExp} options={optionsBarExp}></Bar>
        </ChartBlock>
      </Flex>
    </BalanceBlock>
  );
};
