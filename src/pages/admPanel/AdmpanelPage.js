import { NavMenu } from "../../components/NavBlock/NavMenu";
import { AppWrapper } from "./admpanel.style";
import { Admpanel } from "./Admpanel";

export const AdmpanelPage = () => {
  return (
    <AppWrapper>
      <NavMenu />
      <Admpanel />
    </AppWrapper>
  );
};
