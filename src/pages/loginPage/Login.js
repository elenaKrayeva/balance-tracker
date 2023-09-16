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
import { loginWithGoogle, setError, clearError } from "../../store/authSlice";
import { useSelector } from "react-redux";
import { getUser } from "../../store/authSelectors";
import { signInUser } from "../../store/authSlice";
import { ErrorMessage } from "../../components/ErrorMessage";
import { getErrorMessage } from "../../store/authSelector";

export const Login = () => {
  const user = useSelector(getUser);
  const error = useSelector(getErrorMessage);
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
    try {
      dispatch(signInUser({ email, password }));
    } catch (error) {
      dispatch(setError(error));
    }
  };

  const handleGoogleLogin = () => {
    handleClearError();
    dispatch(loginWithGoogle());
  };

  const handleRegister = () => {
    handleClearError();
    navigate("/register");
  };

  const handleClearError = () => {
    dispatch(clearError());
  };

  return (
    <StyledWrapper>
      <StyledInner>
        <InnerBlock>
          <StyledLabel>Е-мейл</StyledLabel>
          <Input value={email} onChange={emailHandler} />
        </InnerBlock>
        {error && (
            <ErrorMessage error={error} handleClearError={handleClearError} />
          )}
        <InnerBlock>
          <StyledLabel>Пароль</StyledLabel>
          <Input type="password" value={password} onChange={passwordHandler} />
        </InnerBlock>
        <ButtonBlock>
          <Button size="m" onClick={handleLoginBtn}>
            Войти
          </Button>
          <Button size="m" onClick={handleGoogleLogin}>
            Войти через Google
          </Button>
          <Button size="m" onClick={handleRegister}>
            Регистрация
          </Button>
        </ButtonBlock>
      </StyledInner>
    </StyledWrapper>
  );
};
