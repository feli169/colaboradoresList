import { Fragment } from "react";
import "./Listado.css"

const listado = ({ colaboradores, eliminarCola }) => {

  const handleDelete = (id) => {
    eliminarCola(id);
  };
  return (
    <Fragment>
       {colaboradores.length === 0 ? (
        <h3>No hay registros</h3>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map(colaborador => (
              <tr key={colaborador.id}>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td>
                  <button onClick={() => handleDelete(colaborador.id)} className="btn btn-dark  px-3 mt-2 btn-sm" >Eliminar</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  )
}

export default listado;

