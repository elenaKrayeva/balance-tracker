import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const StyledInner = styled.form`
  width: 500px;
  height: 300px;
  background: #e4e9f0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.4);
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 8px 0;
`;

export const InnerBlock = styled.div`
  width: 80%;
  margin: 0 auto;  
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-around;
`;
