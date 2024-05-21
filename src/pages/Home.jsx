// import googlelogo from "../assets/logogoogle.png";
// import { Perfil } from "../components/Perfil";
import styled from "styled-components";
import { useEffect, useState } from "react";
import {
  Buscador,
  Tabla,
  UserAuth,
  Header,
  BtnNuevo,
  Registro,
  CrudSupabaseContext,
  supabase,
} from "../index";

export function Home() {
  const { datacategoria, setDatacategoria, mostrarCategorias } = CrudSupabaseContext();
  const [openRegistro, setOpenRegistro] = useState(false);
  const [dataSelect, setDataSelect] = useState([]);
  const [accion, setAccion] = useState("");

  useEffect(() => {
    supabase
      .channel("postgresChangesChannel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "categorias",
        },
        (payload) => {
          payload.new.imagen != undefined
            ? setDatacategoria((data) => [...data, payload.new])
            : "";
        }
      )
      .subscribe();
  }, []);
  function nuevoRegistro() {
    setOpenRegistro(true);
    setAccion("Nuevo");
    setDataSelect([]);
  }
  return (
    <Container>
      <Header />
      <span className="difuminado"></span>
      {openRegistro && (
        <Registro
          dataSelect={dataSelect}
          onClose={() => setOpenRegistro(!openRegistro)}
          accion={accion}
        />
      )}
      <section className="contentBuscador">
        <Buscador />
        <BtnNuevo funcion={nuevoRegistro} />
      </section>
      <Tabla
        rows={datacategoria}
        setDataSelect={setDataSelect}
        setOpenRegistro={setOpenRegistro}
        setAccion={setAccion}
      />
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
