import styled from "styled-components";
import {
  v,
  ColorContent,
  ContentAccionesTabla,
  CrudSupabaseContext,
} from "../../index";
import Swal from "sweetalert2";

export function Tabla({ rows, setOpenRegistro, setDataSelect, setAccion }) {
  const { eliminarCategorias } = CrudSupabaseContext();

  function eliminar(id) {
    Swal.fire({
      title: "Do you want to delete this data?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await eliminarCategorias(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your data has been deleted.",
          icon: "success",
        });
      }
    });
  }
  function editar(data) {
    setOpenRegistro(true);
    setDataSelect(data);
    setAccion("Editar");
  }
  return (
    <>
      {rows.length > 0 && (
        <Container>
          <table className="responsive-table">
            <thead>
              <tr>
                <th scope="col">Imagen</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Icono</th>
                <th scope="col">Color</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">
                      <ImageContent>
                        <img src={item.imagen} />
                      </ImageContent>
                    </th>
                    <th scope="row">{item.descripcion}</th>
                    <td data-title="Icono">{item.icono}</td>
                    <td data-title="Color" className="ColorDiv">
                      <div className="colorContent">
                        <ColorContent
                          color={item.color}
                          alto="25px"
                          ancho="25px"
                        />
                      </div>
                    </td>
                    <td data-title="Acciones">
                      <ContentAccionesTabla
                        funcionEliminar={() => eliminar(item.id)}
                        funcionEditar={() => {
                          editar(item);
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  position: relative;
  z-index: 2;
  margin: 5% 3%;
  @media (min-width: ${v.bpbart}) {
    margin: 2%;
  }
  @media (min-width: ${v.bphomer}) {
    margin: 2em auto;
    max-width: ${v.bphomer};
  }
  .responsive-table {
    width: 100%;
    margin-bottom: 1.5em;
    border-spacing: 0;
    @media (min-width: ${v.bpbart}) {
      font-size: 0.9em;
    }
    @media (min-width: ${v.bpmarge}) {
      font-size: 1em;
    }
    thead {
      position: absolute;
      padding: 0;
      border: 0;
      height: 1px;
      width: 1px;
      overflow: hidden;
      @media (min-width: ${v.bpbart}) {
        position: relative;
        height: auto;
        width: auto;
        overflow: auto;
      }
      th {
        border-bottom: 2px solid rgba(115, 115, 115, 0.32);
        font-weight: normal;
        text-align: center;
        color: ${({ theme }) => theme.text};
        &:first-of-type {
          text-align: left;
        }
      }
    }
    tbody,
    tr,
    th,
    td {
      display: block;
      padding: 0;
      text-align: left;
      white-space: normal;
    }
    tr {
      @media (min-width: ${v.bpbart}) {
        display: table-row;
      }
    }
    th,
    td {
      padding: 0.5em;
      vertical-align: middle;
      @media (min-width: ${v.bplisa}) {
        padding: 0.75em 0.5em;
      }
      @media (min-width: ${v.bpbart}) {
        display: table-cell;
        padding: 0.5rem;
      }
      @media (min-width: ${v.bpmarge}) {
        padding: 0.75 0.5rem;
      }
      @media (min-width: ${v.bphomer}) {
        padding: 0.75;
      }
    }
    tbody {
      @media (min-width: ${v.bpbart}) {
        display: table-row-group;
      }
      tr {
        margin-bottom: 1em;
        @media (min-width: ${v.bpbart}) {
          display: table-row;
          border-width: 1px;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        &:nth-of-type(even) {
          @media (min-width: ${v.bpbart}) {
            background-color: rgba(116, 34, 224, 0.15);
          }
        }
        th[scope="row"] {
          @media (min-width: ${v.bplisa}) {
            border-bottom: 1px solid rgba(115, 115, 115, 0.32);
          }
          @media (min-width: ${v.bpbart}) {
            background-color: transparent;
            text-align: center;
            color: ${({ theme }) => theme.text};
          }
        }
        .ColorDiv {
          text-align: right;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 80px;
          @media (min-width: ${v.bpbart}) {
            justify-content: center;
          }
        }
        td {
          text-align: right;
          @media (min-width: ${v.bpbart}) {
            border-bottom: 1px solid rgba(161, 161, 161, 0.32);
            text-align: center;
          }
        }
        td[data-title]::before {
          content: attr(data-title);
          float: left;
          font-size: 0.8em;
          @media (min-width: ${v.bplisa}) {
            font-size: 0.9em;
          }
          @media (min-width: ${v.bpbart}) {
            content: none;
          }
        }
      }
    }
  }
`;
const ImageContent = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 20%;
  overflow: hidden;
  display: flex;
  justify-content: center;

  img {
    object-fit: cover;
  }
`;
