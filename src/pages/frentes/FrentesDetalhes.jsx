import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Col, Row, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'


const FrentesDetalhes = () => {

  const params = useParams()

  const [frente, setFrente] = useState({})

  useEffect(() => {
    apiDeputados.get('frentes/' + params.id).then(resultado => {
      setFrente(resultado.data.dados)
    })

  }, [])

  return (
    <div>
      {!frente.id && <h3>Carregando... Aguarde!</h3>}

      {frente.id &&
        <div>

          <Row>
            <Col>
              <Card>
                <Card.Header><h4 style={{ textAlign: 'center' }}><strong>{frente.titulo}</strong></h4></Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item><p><strong>Situação: </strong>{frente.situacao}</p></ListGroup.Item>
                    <ListGroup.Item><p><strong>Telefone: </strong>{frente.telefone}</p></ListGroup.Item>
                    <ListGroup.Item><p><strong>Coordenador: </strong>{frente.coordenador.nome}</p></ListGroup.Item>
                    <ListGroup.Item><Link className='btn btn-outline-dark' to={-1}>Voltar</Link></ListGroup.Item>
                  </ListGroup>
                </Card.Body>

              </Card>
              <br />
              <Card>
                <Card.Header><h4 style={{ textAlign: 'center' }}><strong>Coordenador</strong></h4></Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    <ListGroup.Item><img variant="top" src={frente.coordenador.urlFoto} /></ListGroup.Item>
                    <ListGroup.Item><p><strong>Nome: </strong>{frente.coordenador.nome}</p></ListGroup.Item>
                    <ListGroup.Item><p><strong>Partido: </strong>{frente.coordenador.siglaPartido}</p></ListGroup.Item>
                    <ListGroup.Item><p><strong>UF: </strong>{frente.coordenador.siglaUf}</p></ListGroup.Item>
                    <ListGroup.Item><Link className='btn btn-outline-dark' to={-1}>Voltar</Link></ListGroup.Item>
                  </ListGroup>
                </Card.Body>

              </Card>
            </Col>
          </Row>
        </div>
      }
    </div>
  )
}

export default FrentesDetalhes