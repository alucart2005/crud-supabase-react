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
        {...register("descripcion", {require:true,minLength:2})}
      >

      </input>
    </Container>
  );
}
const Container = styled.div``;
