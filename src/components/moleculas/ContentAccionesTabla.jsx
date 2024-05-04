import styled from "styled-components";
import { AccionTabla } from "../atomos/AccionTabla";
import { v } from "../../index";


export function ContentAccionesTabla() {
  return (
    <Container>
      <AccionTabla fontSize="18px" color="#7d7d7d" icono={<v.iconeditarTabla/>}/>
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