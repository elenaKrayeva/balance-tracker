import styled from "styled-components";
import { AvatarBlock } from "./AvatarBlock";
import { Flex } from "../UI/Flex";
import { NavItem } from "./NavItem";
import { LogOut } from "./LogOut";
import { EmptyBlock } from "../UI/EmptyBlock";
import imgExp from "../../assets/img/expenses.png";
import imgInc from "../../assets/img/incomes.png";
import imgLogout from "../../assets/img/logout.png";
import imgBalance from "../../assets/img/balance.jpg";
import imgGear from "../../assets/img/gear.jpg";
import { useSelector } from "react-redux";
import { getUser } from "../../store/authSelectors";

const StyledNavBlock = styled.nav`
  min-height: calc(100vh - 30px);
  background: #e4e9f0;
  border: 2px solid white;
  border-radius: 15px;
  padding: 15px;
  width: 230px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  position: fixed;
  top: 15px;
  z-index: 10;
  transition: all 0.3s ease;

  @media (max-width: 900px) {
    transform: ${({ $burgerOpen }) =>
      $burgerOpen ? "translateX(0)" : "translateX(-1000%)"};
  }
`;

export const NavBlock = ({ $burgerOpen }) => {
  const { displayName: userName, email } = useSelector(getUser);
  const name = userName ? userName : email;

  return (
    <StyledNavBlock $burgerOpen={$burgerOpen}>
      <AvatarBlock name={name} />
      <Flex>
        <NavItem $img={imgGear} to="/admpanel">
          АдминПанель
        </NavItem>
      </Flex>
      <Flex>
        <NavItem $img={imgBalance} to="/balance">
          Баланс
        </NavItem>
      </Flex>
      <Flex>
        <NavItem $img={imgExp} to="/expenses">
          Расходы
        </NavItem>
      </Flex>
      <Flex>
        <NavItem $img={imgInc} to="/incomes">
          Доходы
        </NavItem>
      </Flex>
      <EmptyBlock />
      <Flex $mb="0">
        <LogOut $img={imgLogout} />
      </Flex>
    </StyledNavBlock>
  );
};
