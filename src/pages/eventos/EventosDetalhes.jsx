import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Card, Col, Row, ListGroup } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'
import { BsFillFileEarmarkTextFill } from 'react-icons/bs'
import ModalPage from '../../components/ModalPage'

const EventosDetalhes = () => {

  const params = useParams()

  const [evento, setEvento] = useState([])
  const [orgao, setOrgao] = useState({})
  const [deputado, setDeputado] = useState([])

  useEffect(() => {
    apiDeputados.get('eventos/' + params.id).then(resultado => {
      setEvento(resultado.data.dados)
    })

    apiDeputados.get('eventos/' + params.id + '/orgaos').then(resultado => {
      setOrgao(resultado.data.dados[0])
    })

    apiDeputados.get('eventos/' + params.id + '/deputados').then(resultado => {
      setDeputado(resultado.data.dados)
    })
  }, [])

  console.log(deputado)

  const [lgshow, setLgShow] = useState(false)
  const [modal, setModal] = useState()
  const handleClose = () => setLgShow(false)

  return (
    <div>
      {!evento.id && <h3>Carregando... Aguarde!</h3>}

      {evento.id &&
        <div>

          <Row>
            <Col>
              <Card>
                <Card.Header><h4 style={{ textAlign: 'center' }}><strong>Informações </strong></h4></Card.Header>
                <Card.Body>
                  <Row className='mb-3'>
                    <span><strong>Tipo: </strong>{evento.descricaoTipo}</span><br/>
                    <span><strong>Local: </strong>{evento.localCamara.nome}</span><br/>
                    <span><strong>Situação: </strong>{evento.situacao}</span><br/>
                    <span><strong>Órgão Organizador: </strong>({orgao.sigla}) - {orgao.nome} </span><br/>
                  </Row>
                  <Button variant="outline-primary" onClick={() => { setLgShow(true); setModal(evento) }}><BsFillFileEarmarkTextFill /> Descrição</Button>{' '}
                  <Link className='btn btn-outline-dark' to={-1}>Voltar</Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <ModalPage show={lgshow} handleClose={(handleClose)} descricao={modal?.descricao}></ModalPage>

        </div>
      }
    </div>
  )
}

export default EventosDetalhes