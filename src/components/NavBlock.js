import styled from "styled-components";
import { AvatarBlock } from "./AvatarBlock";
import { Flex } from "./Flex";
import { NavItem } from "./NavItem";
import { EmptyBlock } from "./EmptyBlock";
import imgExp from "../assets/img/expenses.png";
import imgInc from "../assets/img/incomes.png";
import imgDash from "../assets/img/dashboard.png";
import imgLogout from "../assets/img/logout.png";

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
  
  @media (max-width: 900px) {
    transform: ${({ $burgerOpen }) => $burgerOpen ? "translateX(0)" : "translateX(-1000%)"};
  }
`;

export const NavBlock = ({$burgerOpen}) => {
  return (
    <StyledNavBlock $burgerOpen={$burgerOpen}>
      <AvatarBlock />
      <Flex>
        <NavItem $img={imgDash}>АдминПанель</NavItem>
      </Flex>
      <Flex>
        <NavItem $img={imgExp}>Расходы</NavItem>
      </Flex>
      <Flex>
        <NavItem $img={imgInc}>Доходы</NavItem>
      </Flex>
      <EmptyBlock />
      <Flex>
        <NavItem $img={imgLogout}>Выйти</NavItem>
      </Flex>
    </StyledNavBlock>
  );
};
