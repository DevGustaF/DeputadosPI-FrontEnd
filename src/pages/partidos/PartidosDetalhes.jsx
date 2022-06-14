import React, { useEffect, useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'

const PartidosDetalhes = () => {
  const params = useParams()

  const [partido, setPartido] = useState({})
  const [membros, setMembros] = useState([])

  useEffect(() => {
    apiDeputados.get('partidos/' + params.id).then(resultado => {
      setPartido(resultado.data.dados)
    })

    apiDeputados.get('partidos/' + params.id + '/membros').then(resultado => {
      setMembros(resultado.data.dados)
    })
  }, [])

  return (
    <div>
      {!partido.id && <h2>Carregando... Aguarde!</h2>}

      {partido.id &&
        <div>
          <h3 style={{ textAlign: 'center' }}>{partido.nome}</h3>

          <Row>
            <Col>
              <Card>
                <Card.Header><h4 style={{ textAlign: 'center' }}><strong><img src={partido.urlLogo} /></strong></h4></Card.Header>
                <Card.Body>
                    <span><strong>Sigla: </strong>{partido.sigla}</span><br/>
                    <span><strong>Líder: </strong>{partido.status.lider.nome}</span><br/>
                    <span><strong>Legislatura: </strong>{partido.status.idLegislatura}</span><br/>
                    <span><strong>Qtd. de Membros: </strong>{partido.status.totalMembros}</span><br/>
                    <span><strong>Situação: </strong>{partido.status.situacao}</span>
                </Card.Body>
              </Card>
            </Col>
            <Col md={12} className="mt-3">
              <h3 style={{ textAlign: 'center' }}>Membros:</h3>
            </Col>
          </Row>
          <Row>
            {membros.map(item => (
              <Col className="mb-3" md={2} key={item.id}>
                <Card title={item.nome}>
                  <Card.Header><h6 style={{ textAlign: 'center' }}><strong>{item.nome}</strong></h6></Card.Header>
                  <Link to={'/deputados/' + item.id}>
                    <Card.Img variant="top" src={item.urlFoto} />
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      }
    </div>
  )
}

export default PartidosDetalhes