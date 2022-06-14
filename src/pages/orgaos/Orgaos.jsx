import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'


const Orgaos = () => {

  const [orgaos, setOrgaos] = useState([])
  useEffect(() => {
    apiDeputados.get('orgaos?itens=50').then(resultado => {
      setOrgaos(resultado.data.dados)
    })
  }, [])

  console.log(orgaos);

  return (
    <div>
      <h3 className='mb-3' style={{ textAlign: 'center' }}>Órgãos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sigla</th>
            <th>Nome</th>
            <th>Apelido</th>
            <th>Tipo de Órgão</th>
          </tr>
        </thead>
        <tbody>
          {orgaos.map(item => (
            <tr key={item.id}>
              <td>{item.sigla}</td>
              <td>{item.nome}</td>
              <td>{item.apelido}</td>
              <td>{item.tipoOrgao}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Orgaos