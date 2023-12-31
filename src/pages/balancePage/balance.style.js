import styled from "styled-components";

const Block = styled.div`
  min-height: calc(100vh - 22px);
  background: #e4e9f0;
  border: 2px solid white;
  border-radius: 15px;
  padding: 15px;
`;

export const BalanceBlock = styled(Block)`
  flex: 1;
  margin-left: 250px;
  overflow-x: hidden;
  @media (max-width: 900px) {
    margin-left: 60px;
  }
`;

export const AppWrapper = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  gap: 15px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const CategoryBlock = styled.div`
  flex: 1;
`;
export const DoughnutBlock = styled.div`
  width: ${({ $width }) => $width || "auto"};
`;

export const BarBlock = styled.div`
  width: 50%;

  @media (max-width: 900px) and (min-width: 400px) {
    width: 90%;
  }
  @media (max-width: 399px) {
    width: 220px;
  }
`;
