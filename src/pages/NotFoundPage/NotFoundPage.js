import { Wrapper, Text, TextWrapper, StyledLink } from "./notFound.style";
import { ImgBlock } from "./notFound.style";

export const NotFoundPage = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>Page not found!</Text>
        <StyledLink to="/">
          Go to <b>main</b>
        </StyledLink>
        <ImgBlock></ImgBlock>
      </TextWrapper>
    </Wrapper>
  );
};
