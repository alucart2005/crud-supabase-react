import googlelogo from "../assets/logogoogle.png";
import { Perfil } from "../components/Perfil";
import { UserAuth } from "../index";
import styled from "styled-components";
import {Header} from "../index"

export function Home() {
  return (<Container>
    <Header/>
    </Container>
    );
}
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  position: relative;
`;
