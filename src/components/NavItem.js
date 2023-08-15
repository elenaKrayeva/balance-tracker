import styled from "styled-components";
import { ImageBlock } from "./ImageBlock";

const StyledLink = styled.a` /*будет styled(Link) */
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

  &:hover {
    font-weight: 400;
    font-size: 18px;
    padding: 13px;
  }
`;

export const NavItem = ({$img, children}) => {
  return (
    <>
      <ImageBlock $img={$img}/>
      <StyledLink>{children}</StyledLink>
    </>
  );
};
