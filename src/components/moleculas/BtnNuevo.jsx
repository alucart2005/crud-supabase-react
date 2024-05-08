import styled from "styled-components";
import {v} from "../../index"

export function BtnNuevo({funcion}) {
  return (
    <a>
      <Btn onClick={funcion}>
        <span className="containerText">
          {<v.agregar/>}
        </span>
      </Btn>
    </a>
  );
}
const Btn = styled.button`
  display: inline-block;
  background-color: whitesmoke;
  outline: none;
  font-weight: 500;
  border: none;
  font-size: 23px;
  padding: 0.9rem 2.3rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  z-index: 3;
  .containerText{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &:hover{
    background-color: rgba(121, 185, 157, 0.3);
    color: white;
  }
`;
