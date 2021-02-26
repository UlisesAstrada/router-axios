import React, { useState, useEffect } from 'react'

function Base() { 
  
  const [nombre, setNombre] = useState('Pedro')
  
  useEffect(() => {
    setTimeout(() => {
      setNombre('Ulises')
    }, 2000)
  })

  return (
    <div>
      <h1>Página de Base Ruta /</h1>
      {nombre}
    </div>
  )
}

export default Base
