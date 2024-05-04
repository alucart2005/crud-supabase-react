import googlelogo from "../assets/logogoogle.png";
import { Perfil } from "../components/Perfil";
import { Buscador, Tabla, UserAuth, Header } from "../index";
import styled from "styled-components";

export function Home() {
  return (
    <Container>
      <Header />
      <span className="difuminado"></span>
      <section className="contentBuscador">
        <Buscador />
        <Tabla />
      </section>
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
`;
