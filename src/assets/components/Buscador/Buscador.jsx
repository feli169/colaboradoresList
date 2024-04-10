import { Fragment } from "react";

const Buscador = ({ colaborador }) => {

  const buscarCola = (e) => {
    console.log (e)
    const filtroCola = colaborador.filter(
      (element) => element.nombre.includes(e))
  }

  return (
    <Fragment>
      <label className='d-block mt-4'>Buscador</label>
      <input
        placeholder='Buscar'
        className='my-3 pe-5'
        type="text"
        onChange={(e) => buscarCola(e.target.value)}/>

    </Fragment>
  )

}
export default Buscador
