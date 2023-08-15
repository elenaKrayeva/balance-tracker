import styled from 'styled-components'

const StyledEmptyBlock = styled.div`
background: transparent;
flex: 1;
text-align: center;
font-size: 20px;
font-weight: 500;
padding: 20px;
`


export const EmptyBlock = ({children}) => {
  return <StyledEmptyBlock>{children}</StyledEmptyBlock>
  
}

