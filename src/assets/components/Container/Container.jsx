import Form from "../Form/Form"
import Listado from "../Listado/listado"
import { useState } from "react"
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
    <div className=  'container'>
      <h1 className="p-3">Listado de colaboradores</h1>
      <Buscador/>
       <Listado colaboradores={colaboradores} eliminarCola={eliminarCola} />
      <div className="form text-center"><Form agregarColaborador={agregarColaborador} /></div>
    </div>
  )
}

export default Container
