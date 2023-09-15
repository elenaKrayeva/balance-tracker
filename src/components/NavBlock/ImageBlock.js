import styled from 'styled-components'


const StyledImage = styled.div`
background-image: url(${({$img}) => $img});
background-position: center center;
background-size: cover;
width: 40px;
height: 40px;
border: 2px solid #fff;
border-radius: 15px 0 0 15px;
`


export const ImageBlock = ({$img}) => {
  return <StyledImage $img={$img}/>
}

