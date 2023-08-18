import { Expenses } from "./Expenses";
import { Burger } from "../../components/Burger";
import { AppWrapper } from "./expenses.style";

export const ExpensesPage = () => {
  return (
    <>
      <AppWrapper>
        <Burger />
        <Expenses />
      </AppWrapper>
    </>
  );
};
