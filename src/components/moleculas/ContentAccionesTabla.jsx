import styled from "styled-components";
import { AccionTabla } from "../atomos/AccionTabla";
import { v } from "../../index";


export function ContentAccionesTabla({funcionEditar, funcionEliminar}) {
  return (
    <Container>
      <AccionTabla funcion={funcionEditar} fontSize="18px" color="#7d7d7d" icono={<v.iconeditarTabla/>}/>
      <AccionTabla funcion={funcionEliminar} fontSize="20px" color="#834a4a" icono={<v.iconeliminarTabla/>}/>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  @media (max-width: 48em) {
    justify-content: end;
  }

`;