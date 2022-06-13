import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'
import { Box } from '@chakra-ui/react'

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
        <h3>{partido.sigla}</h3>

        <Row>
          <Col md={4}>
          <Box bg='black' w='70.4%' p={3} color='black'>
          <Card style={{ width: '18rem' }}>
              <Card.Header><h6 style={{ textAlign: 'center' }}><strong>{partido.nome}</strong></h6></Card.Header>
              <Card.Img variant="top" src={partido.urlLogo} />
              <ListGroup className="list-group-flush">
                <ListGroupItem><p><strong>Situação: </strong>{partido.status.situacao}</p></ListGroupItem>
                <ListGroupItem><p><strong>Qtd. de Membros: </strong>{partido.status.totalMembros}</p></ListGroupItem>
              </ListGroup>
            </Card>
          </Box>
          </Col>
          <Col md={12} className="mt-3">
                    <h3>Líder</h3>
          </Col>
          <Row>
            <Col className="mb-3" md={2} key={partido.id}>
            <Box bg='black' w='100%' p={2} color='black'>
            <Card title={partido.status.lider.nome}>
                  <Card.Header><h6 style={{ textAlign: 'center' }}><strong>{partido.status.lider.nome}</strong></h6></Card.Header>
                  <Card.Img variant="top" src={partido.status.lider.urlFoto} />
              </Card>
            </Box>
            </Col>
            <Col md={12} className="mt-3">
                    <h3>Membros:</h3>
          </Col>
          </Row>
          <Row>
            {membros.map(item => (
                <Col className="mb-3" md={2} key={item.id}>
                  <Box bg='black' w='100%' p={2} color='black'>
                    <Card title={item.nome}>
                    <Card.Header><h6 style={{ textAlign: 'center' }}><strong>{item.nome}</strong></h6></Card.Header>
                    <Link to={'/deputados/' + item.id}>
                      <Card.Img variant="top" src={item.urlFoto} />
                    </Link>
                    </Card>
                    </Box>
                </Col>
              ))}
          </Row>
        </Row>
        </div>
        }
        </div>
        )
        }

export default PartidosDetalhes