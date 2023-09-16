import styled from "styled-components";
import img from "../../assets/img/userava.png"; 

const AvatarBlockWrap = styled.div`
  background: #fff;
  border-radius: 15px;
  padding: 5px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.5);
`;
const AvatarImage = styled.div`
  background: url(${img}) center center no-repeat;
  background-size: cover;
  border-radius: 30px;
  width: 60px;
  height: 60px;
`;

const UserName = styled.p`
  padding: 15px 5px;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  word-break: break-all;
`;
export function AvatarBlock({name}) {
  return (
    <AvatarBlockWrap>
      <AvatarImage />
      <UserName>{name}</UserName>
    </AvatarBlockWrap>
  );
}
