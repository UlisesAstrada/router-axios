import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Usuarios() {

  const [usuarios, setUsuarios] = useState([])

  const obtenerUsuarios = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const users = await res.data
    setUsuarios(users)
  }
  useEffect(() => {
    obtenerUsuarios()
  }, [])

  return (
    <div>
      <h2>Lista de Usuarios</h2>
        {
          usuarios.map((item) => (
            <div>
              <p>{item.name}</p>
            </div>
          ))
        }      
    </div>
  )
}

export default Usuarios