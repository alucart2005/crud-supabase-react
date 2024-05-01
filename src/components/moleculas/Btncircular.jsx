import styled from "styled-components";
import { Icon } from "@rsuite/icons";

export function Btncircular({
  icono,
  width,
  height,
  bgcolor,
  texcolor,
  fontsize,
}) {
  return (
    <Container
      bgcolor={bgcolor}
      width={width}
      height={height}
      texcolor={texcolor}
      fontsize={fontsize}
    >
      <Icon as={icono} />
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.bgcolor};
  min-width: ${(props) => props.width};
  min-height: ${(props) => props.height};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    font-size: ${(props) => props.fontsize};
    text-align: center;
    color: ${(props) => props.texcolor};
  }
`;
