

const Buscador = ({ colaborador }) => {

  const buscarCola = (e) => {
    console.log (e)
    const filtroCola = colaborador.filter(
      (element) => element.nombre.includes(e))
  }

  return (
   
      <input
        placeholder='Buscar'
        className='my-3 pe-5'
        type="text"
        onChange={(e) => buscarCola(e.target.value)}/>
  )
}
export default Buscador;
