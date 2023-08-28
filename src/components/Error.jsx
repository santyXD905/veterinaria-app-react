import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div>
    <p className=" text-center uppercase p-4 bg-red-600 text-white font-bold rounded-md">
      {mensaje} 
    </p>
  </div>
  )
}

export default Error