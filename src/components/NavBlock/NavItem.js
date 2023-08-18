import styled from "styled-components";
import { ImageBlock } from "./ImageBlock";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)` 
  padding: 15px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0 15px 15px 0;
  background: #fff;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.2s ease;
  text-decoration: none;
  color: #000;

  &:hover {
    font-weight: 400;
    font-size: 18px;
    padding: 13px;
  }

`;

export const NavItem = ({$img, children, to}) => {
  return (
    <>
      <ImageBlock $img={$img}/>
      <StyledLink to={to}>{children}</StyledLink>
    </>
  );
};
