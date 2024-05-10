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
      // rescue URL
      const dataImagen = await subirImagen(idauthUserSupabase, idNuevo, file);
      // edit table image field with URL rescued
      const parametroStorageEditar = {
        imagen: dataImagen.publicUrl,
        id: idNuevo,
      };
      await EditarCategorias(
        parametroStorageEditar,
        p.idusuario,
        file,
        idauthUserSupabase
      );
    }
  } catch (error) {
    alert(error.error_description || error.message + " insert categories");
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
    alert("Upload error ", error);
  }
}
async function obtenerUrlImage(ruta) {
  const { data } = await supabase.storage.from("imagenes").getPublicUrl(ruta);
  return data;
}
export async function EditarCategorias(p, idusuario, file, idauthUserSupabase) {
  try {
    const { error } = await supabase
      .from("categorias")
      .update(p)
      .eq("idusuario", idusuario)
      .eq("id", p.id);
    if (error) {
      alert("Error editing category", error);
    }
    if (file.length != 0) {
      const ruta = idauthUserSupabase + "/categorias" + p.id;
      await supabase.storage.from("imagenes").update(ruta, file, {
        cacheControl: "0",
        upsert: true,
      });
    }
  } catch (error) {
    alert(error.error_description || error.message + " edit categories");
  }
}
export async function EliminarCategoria(id, idusuario, idauthUserSupabaseId) {
  try {
    const { error } = await supabase
      .from("categorias")
      .delete()
      .eq("idusuario", idusuario)
      .eq("id", id);
    if (error) {
      alert("Delete error ", error);
    }
    const ruta = idauthUserSupabaseId + "/categorias" + id;
    await supabase.storage.from("imagenes").remove([ruta]);
  } catch (error) {
    alert(error.error_description || error.message + " delete category");
  }
}
export async function MostrarCategorias(idusuario) {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .select()
      .eq("idusuario", idusuario)
      .order("id", { ascending: false });
    if (error) {
      alert("Category error ", error);
    }
    return data;
  } catch (error) {
    alert(error.error_description || error.message + " show category");
  }
}
export async function BuscarCategorias(buscador, idusuario) {
  try {
    const { data, error } = await supabase
      .from("categorias")
      .select()
      .limit(10)
      .eq("idusuario", idusuario)
      .ilike("descripcion", "%" + buscador + "%");
    if (error) {
      alert("Search category error ", error);
    }
    return data;
  } catch (error) {
    alert(error.error_description || error.message + " search category");
  }
}
