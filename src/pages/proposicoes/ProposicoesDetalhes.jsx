import React, { useEffect, useState } from 'react'
import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'

const ProposicoesDetalhes = () => {

    const params = useParams()

    const [proposicao, setProposicao] = useState({})

    useEffect(() => {
        apiDeputados.get('proposicoes/' + params.id).then(resultado => {
            setProposicao(resultado.data.dados)
        })

    }, [])

    return (
        <div>
            {!proposicao.id && <h3>Carregando... Aguarde!</h3>}

            {proposicao.id &&
                <div>

                    <Row>
                        <Col>
                            <Card>
                                <Card.Header><h4 style={{ textAlign: 'center' }}><strong>Informações </strong></h4></Card.Header>
                                <Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item><p><strong>Tipo da Proposição: </strong>{proposicao.descricaoTipo}</p></ListGroup.Item>
                                        <ListGroup.Item><p><strong>Número da Proposição: </strong>{proposicao.numero}</p></ListGroup.Item>
                                        <ListGroup.Item><p><strong>Ano da Proposição: </strong>{proposicao.ano}</p></ListGroup.Item>
                                        <ListGroup.Item><p><strong>Órgão Responsável: </strong>{proposicao.statusProposicao.siglaOrgao}</p></ListGroup.Item>
                                        <ListGroup.Item><p><strong>Situação da Proposição: </strong>{proposicao.statusProposicao.descricaoTramitacao}</p></ListGroup.Item>
                                        <ListGroup.Item><p><strong>Ementa Detalhada: </strong>{proposicao.ementaDetalhada}</p></ListGroup.Item>
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

export default ProposicoesDetalhes