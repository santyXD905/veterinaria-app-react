import Paciente from "./Paciente"
import { useEffect } from "react"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  useEffect(()=>{
    console.log("nuevo paciente")
  },[pacientes])
  
  return (
    
    

    <div className="md:w-1/2 ">

      {pacientes && pacientes.length ? (
        <>
        <h1 className=" font-semibold text-3xl text-center"
          >Listado de Pacientes</h1>

          <p className="text-lg mt-5 text-center py-2 my-3">
            Administra tus{" "}
            <span className=" text-green-400 font-thin" >Paciente y Citas</span>
          </p>

          {
            pacientes.map( paciente => (<Paciente
            key = {paciente.id}
            paciente = {paciente}
            setPaciente = {setPaciente}
            eliminarPaciente = {eliminarPaciente}
            />))
          }
        </>
      ):(
        <>
        <h1 className=" font-semibold text-3xl text-center"
          >No hay pacientes registrados</h1>

          <p className="text-lg mt-5 text-center">
            Agrega pacientes y{" "}
            <span className=" text-green-400 font-thin" >Apareceran Aqui</span>
          </p>
        </>
      )}

      
      
    </div>
  )
}

export default ListadoPacientes