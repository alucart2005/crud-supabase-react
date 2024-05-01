import styled from "styled-components";
import supabaseImage from "../../assets/supabasebg.jpg";
import { DatosUser } from "./DatosUser";

export function Header() {
  return (
    <Container>
      <div className="imageContent">
        <img src={supabaseImage} alt="" />
      </div>
      <div className="details">
        <h1 className="title">Supabase</h1>
        <p className="description">
          Unleash the power of PostgreSQL, a relational database with a
          ready-to-use backend.
        </p>
      </div>
      <DatosUser>
        
      </DatosUser>
    </Container>
  );
}
const Container = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #1cc561,
    #17ab55,
    #149148,
    #11783c,
    #0e6030
  );
  margin: -20px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 15px;
  position: relative;
  z-index: 1;
  .imageContent{
    border-radius: 20px;
    overflow: hidden;
    margin: 20px;
    display: flex;
    box-shadow: 23px 22px 73px -15px rgba(0, 0, 0, 0.6);
    -webkit-box-shadow: 23px 22px 73px -15px rgba(0, 0, 0, 0.6);
    -moz-box-shadow: 23px 22px 73px -15px rgba(0, 0, 0, 0.6);
    height: 250px;
    width: 120px;
    img{
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 1;
    }
  }
  .details{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: #e0dede;
    position: relative;
    z-index: 10;
    .title{
      color: white;
      font-size: 3.5rem;
    }
  }
`;
