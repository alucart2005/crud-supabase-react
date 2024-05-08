import styled from "styled-components";
import {
  Btncircular,
  ContentMenuDesplegable,
  UserAuth,
  v,
  DesplegableUser,
} from "../../index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function DatosUser() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  const [openDesplegableUser, setOpenDesplegableUser] = useState(false);
  function funcionXtipo(tipo) {
    if (tipo === "miperfil") {
      navigate("/perfil")
    }
  }
  return (
    <Container onClick={() => setOpenDesplegableUser(!openDesplegableUser)}>
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
      <span className="name">{user.name}</span>
      {openDesplegableUser && (
        <ContentMenuDesplegable funcion={(p)=>funcionXtipo(p)} top="60px" datadesplegable={DesplegableUser} />
      )}
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
  .name {
    width: 100%;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    //word-wrap: break-word;
  }
`;
