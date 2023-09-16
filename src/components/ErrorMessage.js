import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  color: red;
`;
const StyledP = styled.p`
  padding: 0 8px;
  font-size: 16px;
  max-width: 250px;
`;

const StyledButton = styled.button`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  cursor: pointer;
  position: relative;
`;
const StyledB = styled.b`
font-size: 20px;
position: absolute;
top: -4px;
left: 4px;
`;

export const ErrorMessage = ({ error, handleClearError }) => {
  return (
    <StyledDiv>
      <StyledP>{error}</StyledP>
      <StyledButton onClick={handleClearError}>
        <StyledB>{"\u00D7"}</StyledB>
      </StyledButton>
    </StyledDiv>
  );
};
