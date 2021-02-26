import React from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'

function Usuario() {

  const [usuario, setUsuario] = useState([])
  const {id} = useParams()
  const obtenerUsuario = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`) 
    const users = await res.data
    setUsuario(users)
  }
  useEffect(() => {
    obtenerUsuario()
  }, [])

  return (
    <div>
      <h4>Usuario</h4>      
    </div>
  )
}

export default Usuario
