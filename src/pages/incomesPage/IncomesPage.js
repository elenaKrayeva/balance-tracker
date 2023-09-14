import { NavMenu } from "../../components/NavBlock/NavMenu";
import { Incomes } from "./Incomes";
import { AppWrapper } from "./incomes.style";

export const IncomesPage = () => {
  return (
    <AppWrapper>
      <NavMenu />
      <Incomes />
    </AppWrapper>
  );
};
