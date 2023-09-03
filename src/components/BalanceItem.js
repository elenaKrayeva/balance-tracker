import styled from "styled-components";
import { Flex } from "./UI/Flex";

const StyledBlock = styled.div`
  background-color: #fff;
  border: 1px solid gray;
  font-size: 16px;
  font-weight: 400;
  padding-left: 5px;
  flex: 1;
`;

const StyledSum = styled.div`
  background-color: #fff;
  border: 1px solid gray;
  font-size: 16px;
  font-weight: 400;
  padding-left: 5px;
  width: 200px;
  @media (max-width: 600px) {
    width: 70px;
  }
`;

export const BalanceItem = ({ category, sum }) => {
  return (
    <Flex $shadow="none" $bgc="transparent" $mb='0' $gap='2px'>
      <StyledBlock>{category}</StyledBlock>
      <StyledSum>{sum} р.</StyledSum>
    </Flex>
  );
};
