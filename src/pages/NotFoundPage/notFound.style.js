import styled from "styled-components";
import { Link } from "react-router-dom";
import notfoundImg from "../../assets/img/notfound.png";

export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 26px;
  font-weight: 400;
  b {
    text-decoration: underline;
    font-size: 28px;
    font-weight: 500;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const TextWrapper = styled.div`
  text-align: center;
  position: relative;
`;

export const Text = styled.p`
  font-size: 40px;
  font-weight: 900;
  color: #fff;
  margin: 0 auto;
  text-align: center;
`;

export const ImgBlock = styled.div`
  background-image: url(${notfoundImg});
  background-position: center center;
  background-size: cover;
  width: 300px;
  height: 300px;
  position: absolute;
  top: 30%;
  left: 0;
  z-index: -1;
`;
