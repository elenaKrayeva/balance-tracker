import styled from "styled-components";

const Block = styled.div`
  min-height: calc(100vh - 22px);
  background: #e4e9f0;
  border: 2px solid white;
  border-radius: 15px;
  padding: 15px;
`;

export const AdmpanelBlock = styled(Block)`
  flex: 1;
  margin-left: 250px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
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

export const LeftBlock = styled.div`
  min-width: 48%;
  @media (max-width: 680px) {
    width: 100%;
  }
`;

export const RightBlock = styled(LeftBlock)``;

export const InputDiv = styled.div`
  padding: 5px 15px;
`;

export const Text = styled.p`
font-size: 16px;
font-weight: 700;
text-align: center;
padding: 10px;
`;

