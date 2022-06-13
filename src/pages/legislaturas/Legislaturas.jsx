import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'

const Legislaturas = () => {

  const [legislaturas, setLegislaturas] = useState([])

  useEffect(() => {
    apiDeputados.get('legislaturas').then(resultado => {
      setLegislaturas(resultado.data.dados)
    })
  }, [])

  const getDateBR = (data => {
    return new Date(data).toLocaleDateString();
  })

  console.log(legislaturas);

  return (
    <div>
      <h3 className='mb-3' style={{ textAlign: 'center' }}>Legislaturas</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Legislatura</th>
            <th>Ínicio Do Mandato</th>
            <th>Fim do Mandato</th>
          </tr>
        </thead>
        <tbody>
          {legislaturas.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{getDateBR(item.dataInicio)}</td>
              <td>{getDateBR(item.dataFim)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Legislaturas