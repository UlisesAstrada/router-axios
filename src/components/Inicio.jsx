import React from 'react'
import {useParams} from 'react-router-dom'

function Inicio() {
  
  const {nombre} = useParams()
  
  return (
    <div>
      <h1>Página de Inicio</h1>
      {nombre}      
    </div>
  )
}

export default Inicio
