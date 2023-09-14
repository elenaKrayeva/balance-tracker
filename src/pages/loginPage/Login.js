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
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "../../store/authSlice";
import { useSelector } from "react-redux";
import { getUser } from "../../store/authSelectors";
import { signInUser } from "../../store/authSlice";

export const Login = () => {
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      navigate("/balance");
    }
  }, [user, navigate]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginBtn = () => {
    dispatch(signInUser({ email, password }));
  };

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <StyledWrapper>
      <StyledInner>
        <InnerBlock>
          <StyledLabel>Email</StyledLabel>
          <Input value={email} onChange={emailHandler} />
        </InnerBlock>
        <InnerBlock>
          <StyledLabel>Password</StyledLabel>
          <Input type='password' value={password} onChange={passwordHandler} />
        </InnerBlock>
        <ButtonBlock>
          <Button size="m" onClick={handleLoginBtn}>
            LogIn
          </Button>
          <Button size="m" onClick={handleGoogleLogin}>
            Login with Google
          </Button>
          <Button size="m" onClick={handleRegister}>
            Register
          </Button>
        </ButtonBlock>
      </StyledInner>
    </StyledWrapper>
  );
};
