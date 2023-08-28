import React from 'react'

const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {
    
    const handleEliminar = () => {
        const res = confirm("desea eliminar este paciente?");
        if(res){
            eliminarPaciente(paciente.id)
        }
    }
  
    return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-3 rounded-xl'>
        
        <p className='font-bold mb-3 text-gray-700 uppercase'> nombre: {" "}
            <span className='font-normal normal-case'>{paciente.nombre}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> propietario: {" "}
            <span className='font-normal normal-case'>{paciente.propietario}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> email: {" "}
            <span className='font-normal normal-case'>{paciente.email}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> fecha de alta: {" "}
            <span className='font-normal normal-case'>{paciente.fecha}</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'> sintomas: {" "}
            <span className='font-normal normal-case'>{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between mt-3">
            <button type='button'
            className='py-2 mx-3 px-10 bg-indigo-600 hover:bg-indigo-800 text-white rounded-lg 
            font-bold uppercase'
            onClick={() => setPaciente(paciente)}
            >Editar</button>

            <button type='button'
            className='py-2 px-10 mx-3 bg-red-500 hover:bg-red-800 text-white rounded-lg 
            font-bold uppercase'
            onClick={handleEliminar}
            >Eliminar</button>
        </div>


    </div>
  )
}

export default Paciente