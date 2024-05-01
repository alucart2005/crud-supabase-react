import styled from "styled-components";
import { Btncircular, UserAuth, v } from "../../index";

export function DatosUser() {
  const { user } = UserAuth();
  return (
    <Container>
      <div className="imgContainer">
        <img src={user.picture} />
      </div>
      <div className="btncircularContainer">
        <Btncircular
          icono={v.iconocorona}
          width="25px"
          height="25px"
          bgcolor="white"
          fontsize="11px"
          texcolor="black"
        />
      </div>
      <span>{user.name}</span>
    </Container>
  );
}
const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 50px;
  margin: 15px;
  cursor: pointer;
  transition: all 0.3s;
  .imgContainer {
    height: 40px;
    width: 40px;
    min-height: 40px;
    min-width: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .btncircularContainer {
    position: absolute;
    display: flex;
    transform: translateX(-50px) translateY(-12px);
  }
  &:hover {
    background-color: ${({ theme }) => theme.bg3};
  }
  span{
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    //word-wrap: break-word;
  }
`;
