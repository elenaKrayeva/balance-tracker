import styled from "styled-components";

const StyledModalWrap = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

const SyledModalContent = styled.div`
  background: #fff;
  border: 1px solid white;
  border-radius: 15px;
  width: fit-content;
`;

export const Modal = ({ onAddExpense, setModalActive, children }) => {
  return (
    <StyledModalWrap
      onAddExpense={onAddExpense}
      onClick={() => setModalActive(false)}
    >
      <SyledModalContent
        onAddExpense={onAddExpense}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </SyledModalContent>
    </StyledModalWrap>
  );
};
