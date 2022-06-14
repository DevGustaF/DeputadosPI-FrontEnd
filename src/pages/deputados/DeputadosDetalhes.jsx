import React, { useEffect, useState } from 'react'
import { Card, Col, Row, Tabs, Tab } from 'react-bootstrap'
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
                        <Col md={3}>
                            <Card>
                                <Card.Body>
                                    <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
                                </Card.Body>

                            </Card>
                        </Col>
                        <Col md={9}>
                            <Card>
                                <Card.Body>
                                <Row className='mb-3'>
                                    <Tabs defaultActiveKey="perfil" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="perfil" title="Perfil">
                                            <span><strong>Nome Completo: </strong>{deputado.nomeCivil}</span><br/>
                                            <span><strong>Data de Nascimento: </strong>{getDateBR(deputado.dataNascimento)}</span><br/>
                                            <span><strong>Local de Nascimento: </strong>{deputado.ufNascimento}</span><br/>
                                            <span><strong>Escolaridade: </strong>{deputado.escolaridade}</span><br/>
                                            <span><strong>Condição Eleitoral: </strong>{deputado.ultimoStatus.condicaoEleitoral}</span><br/>
                                            <span><strong>Email: </strong>{deputado.ultimoStatus.email}</span><br/>
                                            <span><strong>Partido: </strong>{deputado.ultimoStatus.siglaPartido}</span><br/>
                                        </Tab>
                                        <Tab eventKey="despesas" title="Despesas">
                                        </Tab>
                                        <Tab eventKey="ocupacoes" title="Ocupações">
                                        </Tab>
                                    </Tabs>
                                </Row>
                                <Link className='btn btn-outline-dark' to={-1}>Voltar</Link>
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