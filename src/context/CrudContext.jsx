import { createContext, useContext, useState } from "react";
import { InsertarCategorias } from "../supabase/crudCategorias";
import { supabase } from "../supabase/supabase.config";
import { MostrarUsuarioXIdAuthSupabase } from "../supabase/crudUsuarios";

const CrudContext = createContext();
export function CrudContextProvider({children}) {
  const { dataUsuarios, setDatausuarios } = useState([]);
  async function insertarCategorias(p, file) {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    await InsertarCategorias(p, idAuthSupabase, file);
  }
  async function mostrarUsuarios() {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    const data = await MostrarUsuarioXIdAuthSupabase(idAuthSupabase);
    setDatausuarios(data[0]);
    return data[0];
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
    <CrudContext.Provider value={dataUsuarios}>
      {children}
    </CrudContext.Provider>
  )
}
export const CrudSupabaseContext =()=>{
  return useContext(CrudContext)
}