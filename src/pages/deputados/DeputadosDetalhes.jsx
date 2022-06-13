import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'

const DeputadosDetalhes = () => {

    const params = useParams()

    const [deputado, setDeputado] = useState({})

    const getDateBR = (data => {
        return new Date(data).toLocaleDateString();
    })

    useEffect(() => {
        apiDeputados.get('deputados/' + params.id).then(resultado => {
            setDeputado(resultado.data.dados)
        })
    }, [])

  return (
    <div>
        {!deputado.id && <h3>Carregando... Aguarde!</h3>}
        
        {deputado.id &&
            <div>

                <Row>
                    <Col md={4}>
                    <Box bg='black' w='90.5%' p={4} color='black'>
                        <Card>
                        <Card.Header><h3 style={{ textAlign: 'center' }}><strong>{deputado.ultimoStatus.nome}</strong></h3></Card.Header>
                            <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
                        </Card>
                    </Box>
                    </Col>
                    <Col md={8}>
                    <Card>
                        <Card.Header><h4 style={{ textAlign: 'center' }}><strong>Informações: </strong></h4></Card.Header>
                        <Card.Body>
                        <ListGroup variant="flush">
                        <ListGroup.Item><p><strong>Nome Completo: </strong>{deputado.nomeCivil}</p></ListGroup.Item>
                            <ListGroup.Item><p><strong>Data de Nascimento: </strong>{getDateBR(deputado.dataNascimento)}</p></ListGroup.Item>
                            <ListGroup.Item><p><strong>Local de Nascimento: </strong>{deputado.ufNascimento}</p></ListGroup.Item>
                            <ListGroup.Item><p><strong>Escolaridade: </strong>{deputado.escolaridade}</p></ListGroup.Item>
                            <ListGroup.Item><p><strong>Condição Eleitoral: </strong>{deputado.ultimoStatus.condicaoEleitoral}</p></ListGroup.Item>
                            <ListGroup.Item><p><strong>Email: </strong>{deputado.ultimoStatus.email}</p></ListGroup.Item>
                            <ListGroup.Item><p><strong>Partido: </strong>{deputado.ultimoStatus.siglaPartido}</p></ListGroup.Item>
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

export default DeputadosDetalhes