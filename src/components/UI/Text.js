import styled from 'styled-components'

const StyledText = styled.p`
text-align: ${({$align}) => $align || 'center'};
font-size: ${({$fz}) => $fz || '18px'};
font-weight: ${({$fw}) => $fw || '300'};
padding-left: ${({$pl}) => $pl || '10px'};
padding-right: ${({$pr}) => $pr || '10px'};
padding-bottom: ${({$pb}) => $pb || '10px'};
padding-top: ${({$pt}) => $pt || '10px'};
margin-left: ${({$ml}) => $ml || '0'};
margin-right: ${({$mr}) => $mr || '0'};
margin-bottom: ${({$mb}) => $mb || '0'};
margin-top: ${({$mt}) => $mt || '0'};
width: 100%;
`;

export const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>
};
