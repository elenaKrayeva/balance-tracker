import styled from 'styled-components'

const StyledFlex = styled.div`
display: flex;
flex-direction: ${({$direction}) => $direction || 'row'};
justify-content: ${({$justify}) => $justify || 'stretch'};
align-items: ${({$align}) => $align || 'stretch'};
gap: ${({$gap}) => $gap || '0'};
padding-left: ${({$pl}) => $pl || '0'};
padding-right: ${({$pr}) => $pr || '0'};
padding-bottom: ${({$pb}) => $pb || '0'};
padding-top: ${({$pt}) => $pt || '0'};
flex-wrap: ${({$wrap}) => $wrap || 'nowrap'};

border: 2px solid transparent;
border-radius: 15px;
box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
background: rgba(241, 231, 246, 0.6);
margin-bottom: 20px;
`

export const Flex = (props) => {
    return <StyledFlex {...props}>{props.children}</StyledFlex>
}