import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from '@chakra-ui/react'
import apiDeputados from '../../services/apiDeputados'
import { BsInfoSquareFill } from 'react-icons/bs'

const Frentes = () => {

  const [frentes, setFrentes] = useState([])

  useEffect(() => {
    apiDeputados.get('frentes').then(resultado => {
      setFrentes(resultado.data.dados)
    })
  }, [])

  return (
    <div>
      <h3 className='mb-3' style={{ textAlign: 'center' }}>Frentes</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Detalhar</th>
            <th>Legislatura</th>
            <th>Título</th>
          </tr>
        </thead>
        <tbody>
          {frentes.map(item => (
            <tr key={item.id}>
              <td><Link className='btn btn-outline-dark' href={'/frentes/' + item.id}><BsInfoSquareFill /> Info</Link></td>
              <td>{item.idLegislatura}</td>
              <td>{item.titulo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Frentes