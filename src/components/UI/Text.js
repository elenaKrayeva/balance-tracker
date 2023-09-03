import styled from 'styled-components'

const StyledText = styled.p`
text-align: ${({$align}) => $align || 'center'};
font-size: ${({$fz}) => $fz || '18px'};
font-weight: ${({$fw}) => $fw || '300'};
padding-left: ${({$pl}) => $pl || '5px'};
padding-right: ${({$pr}) => $pr || '5px'};
padding-bottom: ${({$pb}) => $pb || '5px'};
padding-top: ${({$pt}) => $pt || '5px'};
margin-left: ${({$ml}) => $ml || '0'};
margin-right: ${({$mr}) => $mr || '0'};
margin-bottom: ${({$mb}) => $mb || '0'};
margin-top: ${({$mt}) => $mt || '0'};
background-color: ${({$bgc}) => $bgc || 'transparent'};
background-image: ${({$bgi}) => $bgi || 'none'};
width: 100%;
`;

export const Text = (props) => {
  return <StyledText {...props}>{props.children}</StyledText>
};
