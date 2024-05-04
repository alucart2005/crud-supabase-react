import styled from "styled-components";
import { BsSearchHeart } from "react-icons/bs";

export function Buscador() {
  return (
    <Container>
      <BsSearchHeart />
      <input />
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 20px;
  font-size: 20px;
  input{
    font-size: 20px;
    color: #fff;
    border: 0;
    background-color: transparent;
    font-weight: 600;
    :focus{
      outline: transparent;
    }
  }
`;
