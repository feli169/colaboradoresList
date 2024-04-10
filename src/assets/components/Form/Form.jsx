import { useState } from "react";
import Swal from "sweetalert2";
import 'bootstrap/dist/css/bootstrap.min.css';


const Formulario = ({ agregarColaborador }) => {

  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState("")
  const [cargo, setCargo] = useState("")
  const [telefono, setTelefono] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre && email && edad && cargo && telefono) {
      const nuevoColaborador = { nombre, email, edad, cargo, telefono };
      agregarColaborador(nuevoColaborador);

      setNombre('');
      setEmail('');
      setEdad('');
      setCargo('');
      setTelefono('');

      Swal.fire({
        title: "Registro exitoso",
        text: "Click, para continuar",
        icon: "success"
      });
    } else {

      Swal.fire({
        title: "Por favor completa todos los campos",
        text: "Click, para continuar",
        icon: "error"
      });
    }

  }

  return (
  <div className="container">
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Nombre del colaborador"
        className=" form-control pb-2 mb-4"
        type="text"
        onChange={(e) => setNombre(e.target.value)} value={nombre} />
      <input
        placeholder="Email del colaborador"
        type="text"
        className=" form-control pb-2 mb-4 "
        onChange={(e) => setEmail(e.target.value)} value={email} />
      <input
        placeholder="Edad del colaborador"
        type="number"
        className=" form-control pb-2 mb-4 "
        onChange={(e) => setEdad(e.target.value)} value={edad} />
      <input
        placeholder="Cargo del colaborador"
        type="text"
        className=" form-control pb-2 mb-4"
        onChange={(e) => setCargo(e.target.value)} value={cargo} />
      <input
        placeholder="Telefono del colaborador"
        type="number"
        className=" form-control pb-2 mb-4"
        onChange={(e) => setTelefono(e.target.value)} value={telefono} />
      <button
        className="btn btn-dark  px-3 mt-2"
        type="submit">
        Agregar colaborador
      </button>
    </form>
    </div>
  )
}

export default Formulario
