import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'
import { FiSearch } from 'react-icons/fi'

const Frentes = () => {

    const [frentes, setFrentes] = useState([])

  useEffect(() => {
      apiDeputados.get('frentes').then(resultado => {
          setFrentes(resultado.data.dados)
      })
  }, [])

  console.log(frentes);

  return (
    <div>
        <h3 className='mb-3' style={{ textAlign: 'center' }}>Frentes</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Detalhar</th>
            <th>Título</th>
          </tr>
          </thead>
          <tbody>
              {frentes.map(item => (
                  <tr key={item.id}>
                      <td><Link to={'/frentes/' + item.id}><FiSearch /></Link></td>
                      <td>{item.titulo}</td>
                  </tr>
              ))}
          </tbody>
      </Table>
    </div>
  )
}

export default Frentes