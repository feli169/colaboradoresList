import Form from "../Form/Form"
import Listado from "../Listado/listado"
import { useState } from "react"
import { Fragment } from "react"
import BaseColaboradores from "../../../Data/BasDeDatosColaboradores"
import Buscador from "../Buscador/Buscador"
import './Container.css'

const Container = () => {

  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const eliminarCola = (id) => {

    const listaActual = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(listaActual);

  };

  return (
    <Fragment>
      <h1 className="p-3">Listado de colaboradores</h1>
      <div className="search "><Buscador/></div>
      <div className="list"> <Listado colaboradores={colaboradores} eliminarCola={eliminarCola} /></div>
      <div className="form text-center"><Form agregarColaborador={agregarColaborador} /></div>
    </Fragment>
  )
}

export default Container
