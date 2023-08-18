import styled from "styled-components";
import { useState } from "react";
import { NavBlock } from "./NavBlock";

const StyledWrapper = styled.div`
  width: ${({ $burgerOpen }) => ($burgerOpen ? "300px" : "60px")};
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  transition: all .3s ease;
  border-right: 1px solid #fff;
  @media (min-width: 901px) {
    transform: translateX(-1000%);
  }
`;

const StyledBurger = styled.div`
  width: 40px;
  height: 40px;
  margin: 10px auto;
  transform: ${({ $burgerOpen }) => $burgerOpen ? "translateX(300%)" : "translateX(0)"};
  padding-left: ${({ $burgerOpen }) => ($burgerOpen ? "8px" : "0")};
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  border: 2px solid #fff;
  border-radius: 10px;

  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );

  div {
    width: 25px;
    height: 3px;
    background: #fff;
    border-radius: 10px;
    transform-origin: -4px;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ $burgerOpen }) =>
        $burgerOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      transform: ${({ $burgerOpen }) =>
        $burgerOpen ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ $burgerOpen }) => ($burgerOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ $burgerOpen }) =>
        $burgerOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  &:hover {
    background: #fff;
    div {
      background: #000;
    }
  }
`;

export const NavMenu = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  return (
    <>
      <StyledWrapper $burgerOpen={burgerOpen}>
        <StyledBurger
          $burgerOpen={burgerOpen}
          onClick={() => setBurgerOpen((burgerOpen) => !burgerOpen)}
        >
          <div />
          <div />
          <div />
        </StyledBurger>
      </StyledWrapper>
      <NavBlock $burgerOpen={burgerOpen} />
    </>
  );
};
