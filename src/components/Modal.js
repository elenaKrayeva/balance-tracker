import styled from "styled-components";
import { createPortal } from "react-dom";

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
  z-index: 999;
`;

const SyledModalContent = styled.div`
  background: #fff;
  border: 1px solid white;
  border-radius: 15px;
  width: fit-content;
  @media (max-width: 468px) {
    width: 340px;
  }
`;

export const Modal = ({ setModalActive, children }) => {
  return createPortal(
    <StyledModalWrap
      onClick={() => setModalActive(false)}
    >
      <SyledModalContent
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </SyledModalContent>
    </StyledModalWrap>,
    document.body
  );
};
