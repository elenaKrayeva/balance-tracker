import styled from "styled-components";
import { useState } from "react";

const StyledDropdown = styled.div`
  margin: 20px;
  width: 300px;
  cursor: pointer;
  user-select: none;
  position: relative;
`;

const StyledDropdownFlex = styled.div`
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.4);
  padding: 8px 12px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background: #fff;

  &:hover {
    background: #f0f4f5;
  }
  @media (max-width: 468px) {
    padding: 5px;
  }
`;

const StyledDropdownText = styled.div`
  padding: 8px;
  flex: 1;
  font-weight: 400;
  transition: all 0.2 ease;
  @media (max-width: 468px) {
    padding: 2px;
  }
`;
const StyledDropdownArrow = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 8px 6px 0 6px;
  border-color: #000000 transparent;
  transition: all 0.2 ease;
`;

const StyledDropdownContent = styled.div`
  padding: 10px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  background: #fff;
  width: 100%;
  position: absolute;
  top: 110%;
  left: 0;
  z-index: 1;
  @media (max-width: 468px) {
    padding: 5px;
  }
`;

const StyledDropdownItem = styled.div`
  padding: 10px;
  background: #fff;
  border-radius: 5px;
  &:hover {
    background: #f0f4f5;
  }
  @media (max-width: 468px) {
    padding: 5px;
  }
`;

export const Dropdown = ({ options, selectedOption, onOptionItemClick }) => {
  const [isActive, setIsActive] = useState(false);

  const selectHandler = (option) => {
    onOptionItemClick(option);
    setIsActive(false);
  };

  return (
    <StyledDropdown>
      <StyledDropdownFlex onClick={() => setIsActive(!isActive)}>
        <StyledDropdownText>{selectedOption}</StyledDropdownText>
        <StyledDropdownArrow></StyledDropdownArrow>
      </StyledDropdownFlex>
      {isActive && (
        <StyledDropdownContent>
          {options.map((option) => (
            <StyledDropdownItem
              key={option}
              onClick={() => {
                selectHandler(option);
              }}
            >
              {option}
            </StyledDropdownItem>
          ))}
        </StyledDropdownContent>
      )}
    </StyledDropdown>
  );
};
