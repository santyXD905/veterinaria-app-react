import { useEffect, useState } from 'react'

import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoPacientes from './components/ListadoPacientes'

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] = useState({})

  useEffect( () => {
    localStorage.setItem("pacientes",JSON.stringify(pacientes))
  })

  const eliminarPaciente = (id) => {
    const pacientesActualizados = [...pacientes].filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <>

    <Header />    
    <div className='mt-12 md:flex'>
    
    <Formulario
    pacientes = {pacientes}
    setPacientes = {setPacientes}
    paciente = {paciente}
    setPaciente = {setPaciente}
    />
    <ListadoPacientes
    pacientes = {pacientes}
    setPaciente = {setPaciente}
    eliminarPaciente = {eliminarPaciente}
    />

    </div>  
    </>
  )
}

export default App
