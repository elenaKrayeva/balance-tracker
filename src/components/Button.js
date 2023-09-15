import styled, { css } from "styled-components";

export const SIZE = {
  s: css`
    padding: 5px 7px;
    font-size: 12px;
    border-radius: 7px;
  `,
  m: css`
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 10px;
  `,
  l: css`
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 14px;
  `,
};

const StyledButton = styled.button`
  background-color: ${({ $bgc }) => $bgc || "rgba(148, 187, 233, 1)"};
  background-image: ${({ $bgim }) =>
    $bgim ||
    "radial-gradient( circle,  rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)"};
  color: ${({ $color }) => $color || "#fff"};;
  border-radius: 15px;
  border: 2px solid #fff;
  text-transform: capitalize;
  font-weight: 400;
  padding: 15px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.4);
  margin: 10px 5px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #000;
  }
  &:active {
    box-shadow: 5px 5px 5px -5px rgba(0, 0, 0, 0.6) inset;
  }

  ${({ size = "m" }) => {
    return SIZE[size];
  }}
  ${({ size = "l" }) => {
    return SIZE[size];
  }}
`;

export const Button = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
