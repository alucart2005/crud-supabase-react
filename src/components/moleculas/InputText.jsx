import styled from "styled-components";

export function InputText({
  style,
  onChange,
  defaultValue,
  placeholder,
  register,
  errors,
}) {
  return (
    <Container>
      <input
        style={style}
        onChange={onChange}
        type="text"
        defaultValue={defaultValue}
        placeholder={placeholder}
        {...register("descripcion", { required: true, minLength: 2 })}
      ></input>
      {errors.descripcion?.type === "required" && <p>Required field</p>}
      {errors.descripcion?.type === "minLength" && <p>must have at least 2 characters</p>}
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  input {
    display: block;
    width: 100%;
    background: ${({ theme }) => theme.bgtotal};
    padding: 10px 10px 10px 5px;
    border: none;
    border-bottom: solid 1px greenyellow;
    color: ${({ theme }) => theme.text};
    outline: none;
    &:focus {
      border-bottom: none;
    }
    &::placeholder {
      color: #c8c8c8;
    }
  }
  p{
    color: #FF6D00;
    font-size: 12px;
  }
`;
