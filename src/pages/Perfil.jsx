import styled from "styled-components";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function Perfil() {
  const { user } = UserAuth();
  const navigate = useNavigate();
  function volver(params) {
    navigate("/");
  }
  return (
    <Container>
      <SubContainer>
        <div className="profile-image">
          <div className="borde">
            <img src={user.picture} />
          </div>
        </div>
        <h2 className="profile-username">{user.name}</h2>
        <small className="profile-useremail">{user.email}</small>
        <div className="profile-actions">
          <button className="btn btn-volver" onClick={volver}>Back</button>
        </div>
      </SubContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bgtotal};
`;
const SubContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem;
  width: 90%;
  max-width: 300px;
  background-color: #943cfa;
  border-radius: 16px;
  position: relative;
  border: 3px solid transparent;
  background-clip: padding-box;
  text-align: center;
  color: whitesmoke;
  .profile-image {
    width: 175px;
    height: 178px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    box-shadow: 0px 8px 60px -10px rgba(160, 204, 236, 0.6);
    background-color: #c8bad8;
    padding: 6px;
    animation: flotar 1s ease-in-out infinite;
    .borde {
      height: 100%;
      width: 100%;
      border-radius: 50%;
      display: flex;
      overflow: hidden;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
  .profile-username {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1.7rem;
    margin-top: 1.5rem;
  }
  .profile-username:first-letter {
    text-transform: capitalize;
  }
  .profile-useremail {
    margin-top: 0.5rem;
  }
  .profile-actions {
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      padding: 0;
      height: 46px;
      cursor: pointer;
      line-height: 1;
      transition: 0.15s ease;
      &-volver {
        border-radius: 99em;
        background-color: #48aa81;
        background-image: linear-gradient(90deg, #48aa81, #1e3a2e, #48aa81);
        color: white;
        padding: 0 2.5em;
        &:hover,
        &:focus {
          background-size: 150%;
        }
      }
    }
  }
  @keyframes flotar {
    0% {
      transform: translateY(0%);
    }
    50% {
      transform: translateY(-20px);
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    }
    100% {
      transform: translateY(0%);
    }
  }
`;
