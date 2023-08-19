import styled from 'styled-components';


const StyledFlexWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
`;

export const FlexWrap = ({children}) => {
  return (
    <StyledFlexWrap>{children}</StyledFlexWrap>
  )
}
