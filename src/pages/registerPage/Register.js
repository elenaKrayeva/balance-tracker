import {
  StyledWrapper,
  StyledInner,
  StyledLabel,
  InnerBlock,
  ButtonBlock,
} from "./register.style";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/authSlice";
import { useSelector } from "react-redux";
import { getErrorMessage } from "../../store/authSelector";

export const Register = () => {
  const navigate = useNavigate();
  const error = useSelector(getErrorMessage);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRep, setPasswordRep] = useState("");

  const dispatch = useDispatch();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const passwordRepHandler = (e) => {
    setPasswordRep(e.target.value);
  };

  const handleCancelBtn = () => {
    navigate("/");
  };

  const handleRegister = () => {
    dispatch(registerUser({ email, password }));
    navigate("/");
  };

  return (
    <StyledWrapper>
      <StyledInner>
        <InnerBlock>
          <StyledLabel>Е-мейл</StyledLabel>
          <Input value={email} onChange={emailHandler} type="email" required />
        </InnerBlock>
        <InnerBlock>
          <StyledLabel>Пароль</StyledLabel>
          <Input value={password} onChange={passwordHandler} />
        </InnerBlock>
        <InnerBlock>
          <StyledLabel>Пароль</StyledLabel>
          <Input value={passwordRep} onChange={passwordRepHandler} />
        </InnerBlock>
        <ButtonBlock>
          <Button size="m" onClick={handleRegister}>
            Зарегистрироваться
          </Button>
          <Button size="m" onClick={handleCancelBtn}>
            Отмена
          </Button>
        </ButtonBlock>
      </StyledInner>
    </StyledWrapper>
  );
};
