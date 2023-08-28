import { useState,useEffect } from "react"
import Error from "./Error";
//el state es informacion importante que pasa entre componentes




//rafce
const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {

  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("")
  const [email, setEmail] = useState("")
  const [fecha, setFecha] = useState("")
  const [sintomas, setSintomas] = useState("")

  const [error,setError] = useState(false)

  //evitar el rerender 
  useEffect(()=>{
    if(Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substring(2)
    return random
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

     //Objeto paciente
    const objetoPaciente ={
      nombre,
      propietario,
      email,
      sintomas,
      fecha,
      
    }

    if(paciente.id){
      objetoPaciente.id = paciente.id

      //actualizamos la lista
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id ===
        paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)

      //reiniciamos el paciente
      setPaciente({})
      
    }else{
      objetoPaciente.id = generarId();
      setPacientes([...pacientes,objetoPaciente])
      
    }


    //validacion 
    if([nombre,propietario,email,sintomas,fecha].includes("")){
      console.log("campo vacio")
      setError(true);
    }else{

      //asigno paciente
      setNombre("")
      setPropietario("")
      setEmail("")
      setFecha("")
      setSintomas("")

      setError(false)
    }

   

    console.log(objetoPaciente)
  } 

  return (
    <div className="md:w-1/2 lg:h-2/5 ">
      <h1 className=" font-semibold text-3xl text-center"> Seguimiento de Pacientes </h1>

      <p className="text-lg mt-5 text-center py-2 my-3">
        Añade Pacientes y {" "}
        <span className=" text-green-400 font-thin" >Administralos</span>
      </p>

      

      <form onSubmit={handleSubmit} action="" className=" bg-slate-500 shadow-md rounded-lg py-10 px-5">
        
      {error && <Error
      mensaje="todos los campos son obligatorios "/>}

        <div>
          <label htmlFor="" className="block text-gray-50 uppercase font-extralight">
            Nombre Mascota
          </label>
          <input type="text" placeholder="Nombre de la mascota"
           className="rounded-md border-2  w-full pt-2 mt-2 placeholder:text-yellow-700"
            value={nombre}
            onChange={(e)=>{setNombre(e.target.value)}}/>

          <label htmlFor="" className="block text-gray-50 uppercase font-extralight">
            Nombre Propietario
          </label>
          <input type="text" placeholder="Nombre del Propietario"
           className="rounded-md border-2  w-full pt-2 mt-2 placeholder:text-yellow-700" 
           value={propietario}
            onChange={(e)=>{setPropietario(e.target.value)}}/>

          <label htmlFor="" className="block text-gray-50 uppercase font-extralight">
            Email
          </label>
          <input type="text" placeholder="correo del propietario"
           className="rounded-md border-2  w-full pt-2 mt-2 placeholder:text-yellow-700"
           value={email}
            onChange={(e)=>{setEmail(e.target.value)}} />

          <label htmlFor="" className="block text-gray-50 uppercase font-extralight">
            Alta
          </label>
          <input type="date" placeholder=""
           className="w-full border-2 border-blue-500 rounded-xl p-2" 
           value={fecha}
            onChange={(e)=>{setFecha(e.target.value)}}/>
          
          <label htmlFor="" className="block  text-gray-50 uppercase font-extralight">
            Sintomas
          </label>
          <textarea placeholder="describe los sintomas" className=" border-5 rounded-md  w-full pt-2 mt-2 placeholder:text-yellow-700"
           cols="30" rows="5"
           value={sintomas}
            onChange={(e)=>{setSintomas(e.target.value)}}/>

          <button className=" hover:bg-blue-600 w-full bg-green-500 rounded-lg uppercase font-semibold px-3 py-2 text-white"> 
          {paciente.id ? "editar paciente": "agregar paciente"} </button>

        </div>
      </form>
    
    </div>
    
  )
}

export default Formulario