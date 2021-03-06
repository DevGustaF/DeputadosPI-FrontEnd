import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'
import { BsYoutube, BsFillFileEarmarkTextFill, BsInfoSquareFill } from 'react-icons/bs'
import { Link } from '@chakra-ui/react'
import ModalPage from '../../components/ModalPage'


const Eventos = () => {

  const [eventos, setEventos] = useState([])

  useEffect(() => {
    apiDeputados.get('eventos').then(resultado => {
      setEventos(resultado.data.dados)
    })
  }, [])

  const getDateBR = (data => {
    return new Date(data).toLocaleDateString();
  })

  const [lgshow, setLgShow] = useState(false)
  const [evento, setEvento] = useState()
  const handleClose = () => setLgShow(false)

  console.log(evento);

  return (
    <div>
      <h3 className='mb-3' style={{ textAlign: 'center' }}>Eventos</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th >Detalhes</th>
            <th >Data</th>
            <th >Tipo</th>
            <th >Local</th>
            <th >Situação</th>
            <th >Descrição</th>
            <th >Registro</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map(item => (
            <tr key={item.id}>
              <td ><Link className='btn btn-outline-dark' href={'/eventos/' + item.id}><BsInfoSquareFill /> Info</Link></td>
              <td >{getDateBR(item.dataHoraInicio)}</td>
              <td >{item.descricaoTipo}</td>
              <td >{item.localCamara.nome}</td>
              <td >{item.situacao}</td>
              <td ><Button variant="outline-primary" onClick={() => { setLgShow(true); setEvento(item) }}><BsFillFileEarmarkTextFill /> Ver Descrição</Button> </td>
              <td ><Link className='btn btn-outline-danger' href={item.urlRegistro}><BsYoutube /> Youtube</Link></td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalPage show={lgshow} handleClose={(handleClose)} descricao={evento?.descricao}></ModalPage>
    </div>
  )
}

export default Eventos