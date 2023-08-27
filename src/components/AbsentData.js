import styled from 'styled-components'

const StyledWrapper = styled.div`
flex: 1;
border: 2px solid transparent;
border-radius: 15px;
box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
background: rgba(241, 231, 246, 0.6);
display: flex;
justify-content: center;
align-items: center;

`;
const StyledText = styled.div`
font-size: 20px;
font-weight: 500;
`;


export const AbsentData = ({children}) => {
  return (
    <StyledWrapper>
        <StyledText>{children}</StyledText>
    </StyledWrapper>
  )
}
