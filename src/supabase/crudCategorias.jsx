import Swal from "sweetalert2";
import { supabase } from "./supabase.config";

export async function InsertarCategorias(p, idauthUserSupabase, file) {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .insert(p)
      .select();
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Already exists a record with" + p.descripcion,
        footer: '<a href="#">Add a new description</a>',
      });
    }
    if (data) {
      // rescue entered id
      const idNuevo = data[0].id;
      // up to storage
      const dataImagen = await subirImagen(idauthUserSupabase, idNuevo, file);
      // rescue URL
      // edit table image field with URL rescued
    }
  } catch (error) {
    alert(error.error_description || error.message + "insert categories");
  }
}

async function subirImagen(idauthUserSupabase, idcategoria, file) {
  const ruta = idauthUserSupabase + "/categorias" + idcategoria;
  const { data, error } = await supabase.storage
    .from("imagenes")
    .upload(ruta, file, {
      cacheControl: "0",
      upsert: false,
    });
  if (data) {
    const dataImage = await obtenerUrlImage(ruta);
    return dataImage;
  }
  if (error) {
    alert("Upload error ", error)
  }
}
async function obtenerUrlImage(ruta) {
  const {data} =await supabase
  .storage
  .from("imagenes")
  .getPublicUrl(ruta);
  return data;
}