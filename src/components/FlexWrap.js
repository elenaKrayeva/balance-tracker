import styled from 'styled-components';


const StyledFlexWrap = styled.div`
display: flex;
gap: 10px;
justify-content: center;
align-items: center;
`;

export const FlexWrap = ({children}) => {
  return (
    <StyledFlexWrap>{children}</StyledFlexWrap>
  )
}
