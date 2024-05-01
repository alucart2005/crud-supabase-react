import styled from "styled-components";
import { UserAuth } from "../../index";

export function DatosUser() {
  const {user} = UserAuth()
  return (
    <Container>
      <div className="imgContainer">
        <img src={user.picture} />
      </div>
    </Container>
  );
}
const Container = styled.div``;
