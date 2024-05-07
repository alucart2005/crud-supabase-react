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
  const [showPicker, setShowPicker] = useState(false);
  const [emojiSelect, setEmojiSelect] = useState("👽")
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
  function onEmojiClick(emojiObject) {
    setEmojiSelect(()=>emojiObject.emoji)
    setShowPicker(false)
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
                <input
                  value={emojiSelect}
                  type="text"
                  onClick={() => setShowPicker(!showPicker)}
                ></input>
                <span>icono</span>
              </ContentTitle>
              {showPicker && (
                <ContainerEmojiPicker>
                  <EmojiPicker onEmojiClick={onEmojiClick}/>
                </ContainerEmojiPicker>
              )}
            </div>
            <div className="btnGuardarContent">
              <BtnIcono
                bgcolor="#a449e0"
                titulo="Save"
                icono={<v.iconoreact />}
              />
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
  .sub-contenedor {
    width: 500px;
    max-width: 85%;
    border-radius: 20px;
    background: ${({ theme }) => theme.bgtotal};
    padding: 13px 36px 20px;
    box-shadow: -2px 1px 30px -6px rgba(237, 55, 237, 1);
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      h1 {
        font-size: 20px;
        font-weight: 500;
      }
      span {
        font-size: 20px;
        cursor: pointer;
      }
    }
    .formulario {
      section {
        gap: 20px;
        display: flex;
        flex-direction: column;
        .colorContainer {
          .colorPickerContent {
            padding-top: 12px;
            min-height: 50px;
          }
        }
      }
    }
  }
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
    font-size: 25px;
  }
  input{
    border: none;
    outline: none;
    background: transparent;
    padding: 2px;
    width: 35px;
    font-size: 25px;
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
