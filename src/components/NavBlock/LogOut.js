import styled from "styled-components";
import { ImageBlock } from "./ImageBlock";
import { logoutFromApp } from "../../store/authSlice";
import { useDispatch } from "react-redux";

const StyledButton = styled.button`
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
  border: none;

  &:hover {
    font-weight: 400;
    font-size: 18px;
    padding: 13px;
  }
`;

export const LogOut = ({ $img }) => {

    const dispatch = useDispatch();
    
    const logoutHandler = () => {
        dispatch(logoutFromApp())
    }


  return (
    <>
      <ImageBlock $img={$img} />
      <StyledButton onClick={logoutHandler}>Выйти</StyledButton>
    </>
  );
};
