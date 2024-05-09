import styled from "styled-components";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import supabaselogo from "../assets/supabaselogo.png";
import googlelogo from "../assets/logogoogle.png";
import { UserAuth } from "../index";

export function Login() {
  const {signInWithGoogle} = UserAuth();
  return (
    <Container >
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={supabaselogo} className="logo supabase" alt="Vite logo" />
      </div>
      <h1>Vite + React + Supabase</h1>
      <img src={googlelogo} className="logo google" alt="React logo" />
      <div className="card">
        <button onClick={signInWithGoogle}>Start with Google</button>
        <p>codewizardai.com</p>
      </div>
      <p className="read-the-docs">
        Supabase implements all the power of PostgreSQL
      </p>
    </Container>
  );
}
const Container = styled.div`
  background-color: #242424;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: rgba(255, 255, 255, 0.85);
  .card{
    display: flex;
    flex-direction: column;
    gap: 20px;
    button{
      color: fuchsia;
      border: solid 1px greenyellow;
    }
  }
`;
