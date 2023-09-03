import styled from "styled-components";

const StyledBlock = styled.div`
  background-color: #fff;
  border: 1px solid gray;
  font-size: 16px;
  font-weight: 400;
  padding-left: 5px;
`;

export const BalanceItem = ({data, sign}) => {
  return <StyledBlock>
    {data} {sign}
  </StyledBlock>;
};
