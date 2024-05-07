import { useState, useRef } from "react";
import styled from "styled-components";
import { BtnIcono, InputText, v } from "../../index";
import { useForm } from "react-hook-form";
import { CirclePicker } from "react-color";
import EmojiPicker from "emoji-picker-react";

export function Registro() {
  const [fileurl, setFileurl] = useState(v.sinfoto);
  const ref = useRef(null);
  const [file, setFile] = useState([]);
  function prepararImagen(e) {
    let filelocal = e.target.files;
    let fileReaderlocal = new FileReader();
    fileReaderlocal.readAsDataURL(filelocal[0]);
    const tipoimg = e.target.files[0];
    setFile(tipoimg);
    if (fileReaderlocal && filelocal && filelocal.length) {
      fileReaderlocal.onload = function load() {
        setFileurl(fileReaderlocal.result);
      };
    }
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  function insertar() {}
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
        <form className="formulario" onSubmit={handleSubmit(insertar)}>
          <section>
            <div>
              <InputText
                register={register}
                placeholder="Descripcion"
                errors={errors}
                style={{ textTransform: "capitalize" }}
              />
            </div>
            <div className="colorContainer">
              <ContentTitle>
                {<v.paletacolores />}
                <span>Color</span>
              </ContentTitle>
              <div className="colorPickerContent">
                <CirclePicker />
              </div>
            </div>
            <div>
              <ContentTitle>
                <input type="text"></input>
                <span>icono</span>
              </ContentTitle>
              <ContainerEmojiPicker>
                <EmojiPicker/>
              </ContainerEmojiPicker>
            </div>
          </section>
        </form>
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
const ContentTitle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  svg {
    font-size: 20px;
  }
`;
const ContainerEmojiPicker = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
