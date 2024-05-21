import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase.config";
// import { InsertarCategorias } from "../supabase/crudCategorias";
// import { MostrarUsuarioXIdAuthSupabase } from "../supabase/crudUsuarios";
import {
  MostrarUsuarioXIdAuthSupabase,
  InsertarCategorias,
  MostrarCategorias,
  EliminarCategoria,
  EditarCategorias,
} from "../index";

const CrudContext = createContext();
export function CrudContextProvider({ children }) {
  const [dataUsuarios, setDatausuarios] = useState([]);
  const [datacategoria, setDatacategoria] = useState([]);
  async function insertarCategorias(p, file) {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    await InsertarCategorias(p, idAuthSupabase, file);
  }
  async function mostrarCategorias() {
    try {
      const data = await mostrarUsuarios();
      const idusuario = data.id;
      const result = await MostrarCategorias(idusuario);
      setDatacategoria(result);
    } catch (error) {}
  }
  async function mostrarUsuarios() {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    const data = await MostrarUsuarioXIdAuthSupabase(idAuthSupabase);
    setDatausuarios(data[0]);
    return data[0];
  }
  useEffect(() => {
    mostrarCategorias();
  }, []);
  async function editarCategorias(p,file) {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    await EditarCategorias(p,dataUsuarios.id,file,idAuthSupabase);
  }
  async function eliminarCategorias(id) {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    const idusuario = dataUsuarios.id;
    await EliminarCategoria(id,idusuario,idAuthSupabase)
    setDatacategoria(datacategoria.filter((data)=>data.id!==id))
  }
  async function obtenerAuthSupabaseXuser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session != null) {
      const { user } = session;
      const idAuthSupabase = user.id;
      return idAuthSupabase;
    }
  }
  return (
    <CrudContext.Provider value={{ dataUsuarios, insertarCategorias,datacategoria, setDatacategoria, eliminarCategorias, editarCategorias }}>
      {children}
    </CrudContext.Provider>
  );
}
export const CrudSupabaseContext = () => {
  return useContext(CrudContext);
};
