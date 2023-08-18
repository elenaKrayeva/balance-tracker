import {
  StyledWrapper,
  StyledInner,
  StyledLabel,
  InnerBlock,
  ButtonBlock,
} from "./login.style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";



export const Login = () => {
const navigate = useNavigate();

const handleLoginBtn = () => {
  navigate('/expenses')
}

  return (
    <StyledWrapper>
      <StyledInner>
        <InnerBlock>
          <StyledLabel>Login</StyledLabel>
          <Input />
        </InnerBlock>
        <InnerBlock>
          <StyledLabel>Password</StyledLabel>
          <Input />
        </InnerBlock>
        <ButtonBlock>
          <Button size="m" onClick={handleLoginBtn}>LogIn</Button>
          <Button size="m">Register</Button>
        </ButtonBlock>
      </StyledInner>
    </StyledWrapper>
  );
};
