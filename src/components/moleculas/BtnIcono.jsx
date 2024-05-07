import styled from "styled-components";

export function BtnIcono({ titulo, icono, funcion, bgcolor, textcolor }) {
  return (
    <Btn onClick={funcion} bgcolor={bgcolor} textcolor={textcolor}>
      {icono}
      <span>{titulo}</span>
    </Btn>
  );
}
const Btn = styled.button`
  display: flex;
  align-items: center;
  font-family: inherit;
  font-weight: 700;
  font-size: 17px;
  padding: 0.8rem 1.3rem 0.8rem 0.9rem;
  border-color: #c3d978;
  border-width: 5px;
  border-style: solid;
  letter-spacing: 0.05rem;
  border-radius: 16px;
  background: ${(props) => props.bgcolor};
  color: ${(props) => props.textcolor};
  cursor: pointer;
  svg {
    font-size: 30px;
    margin-right: 10px;
    transform: rotate(30deg);
    transition: transform 0.5s cubic-bezier(0.755, 0.05, 0.855, 0.06);
  }
  :hover {
    svg {
      transform: translateX(5px) rotate(90deg);
    }
  }
`;
