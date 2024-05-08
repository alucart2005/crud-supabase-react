import styled from "styled-components";
import { UserAuth } from "../context/AuthContext";

export function Perfil() {
  const { user } = UserAuth();
  return (
    <SubContainer>
      <Container>
        <div className="profile-image">
          <div className="borde">
            <img src={user.picture} />
          </div>
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <small className="profile-useremail">{user.email}</small>
        <div className="profile-actions">
          <button className="btnvolver">Back</button>
        </div>
      </Container>
    </SubContainer>
  );
}
const Container = styled.div``;
const SubContainer = styled.div``;
