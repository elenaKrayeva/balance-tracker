import { Balance } from "./balance";
import { NavMenu } from "../../components/NavBlock/NavMenu";
import { AppWrapper } from "./balance.style";

export const BalancePage = () => {
  return (
    <AppWrapper>
      <NavMenu />
      <Balance />
    </AppWrapper>
  );
};
