import { Expenses } from "./Expenses";
import { NavMenu } from "../../components/NavBlock/NavMenu";
import { AppWrapper } from "./expenses.style";

export const ExpensesPage = () => {
  return (
    <AppWrapper>
      <NavMenu />
      <Expenses />
    </AppWrapper>
  );
};
