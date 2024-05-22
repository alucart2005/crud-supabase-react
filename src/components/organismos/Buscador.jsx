import styled from "styled-components";
import { BsSearchHeart } from "react-icons/bs";
import {CrudSupabaseContext} from "../../index"
import { useState } from "react";

export function Buscador() {
  const {buscarCategorias} = CrudSupabaseContext();
  const [search, setSearch] = useState("");
  function buscar(e) {
    setSearch(e.target.value);
    buscarCategorias(e.target.value)
  }
  return (
    <Container>
      <BsSearchHeart />
      <input value={search} onChange={buscar} placeholder="...Searh"/>
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
