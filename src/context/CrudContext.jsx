import { createContext } from "react";
import { InsertarCategorias } from "../supabase/crudCategorias";
import { supabase } from "../supabase/supabase.config";

const CrudContext = createContext;
export function CrudContextProvider() {
  async function insertarCategorias(p, file) {
    const idAuthSupabase = await obtenerAuthSupabaseXuser();
    await InsertarCategorias(p, idAuthSupabase, file);
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
}
