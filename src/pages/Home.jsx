import { useState } from "react";
// import googlelogo from "../assets/logogoogle.png";
// import { Perfil } from "../components/Perfil";

import {
  Buscador,
  Tabla,
  UserAuth,
  Header,
  BtnNuevo,
  Registro,
} from "../index";
import styled from "styled-components";

export function Home() {
  const [openRegistro, setOpenRegistro] = useState(false);
  function nuevoRegistro() {
    setOpenRegistro(true);
  }
  return (
    <Container>
      <Header />
      <span className="difuminado"></span>
      {openRegistro && <Registro onClose={()=>setOpenRegistro(!openRegistro)}/>}
      <section className="contentBuscador">
        <Buscador />
        <BtnNuevo funcion={nuevoRegistro} />
      </section>
      <Tabla />
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  position: relative;
  .difuminado {
    display: block;
    background-color: #0b4f27;
    height: 400px;
    width: 100%;
    border-radius: 50px;
    position: absolute;
    filter: blur(4rem);
    top: 50px;
  }
  .contentBuscador {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10%;
  }
`;
