import { useState } from "react";
import styled from "styled-components";
import { BtnIcono, v } from "../../index";
import { useRef } from "react";
export function Registro() {
  const [fileurl, setFileurl] = useState(v.sinfoto);
  const ref = useRef(null);
  const [file, setFile] = useState([])
  function prepararImagen(e) {
    let filelocal = e.target.files;
    let fileReaderlocal = new FileReader();
    fileReaderlocal.readAsDataURL(filelocal[0]);
    const tipoimg = e.target.files[0];
    setFile(tipoimg);
    if (fileReaderlocal && filelocal && filelocal.length) {
      fileReaderlocal.onload=function load(){
        setFileurl(fileReaderlocal.result);
      }
    }
  }
  return (
    <Container>
      <div className="sub-contenedor">
        <div className="header">
          <h1>Category registration</h1>
          <span>x</span>
        </div>
        <PictureContainer>
          <div className="ContentImage">
            <img src={fileurl} />
          </div>
          <BtnIcono
            titulo="Add Image"
            textcolor="#fff"
            bgcolor="transparent"
            icono={<v.iconosupabase />}
          />
          <input
            type="file"
            ref={ref}
            onChange={(e) => prepararImagen(e)}
          ></input>
        </PictureContainer>
      </div>
    </Container>
  );
}
const Container = styled.div`
  transition: 0.5s;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(10, 9, 9, 0.5);
  display: flex;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;
const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  .ContentImage {
    border-radius: 10px;
    overflow: hidden;
    img {
      width: 100px;
      object-fit: cover;
    }
  }
`;
