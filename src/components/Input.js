import styled from 'styled-components'

const StyledInput = styled.input`
border: 1px solid transparent;
border-radius: 10px;
padding: 5px 8px;
outline: none;
width: ${({$width}) => $width || '100%'};
height: 35px;
&:focus {
    box-shadow: inset 2px 2px 3px rgba(0,0,0,0.2);
}
`;

export const Input = (props) => {
  return (
    <StyledInput {...props}/>
  )
}
