import React, { useEffect, useState } from 'react'
import { Card, CardImg, Col, NavItem, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import apiDeputados from '../../services/apiDeputados'

const DeputadosDetalhes = () => {

    const params = useParams()

    const [deputado, setDeputado] = useState({})

    useEffect(() => {
        apiDeputados.get('deputados/' + params.id).then(resultado => {
            console.log(resultado.data.dados)
        })
    })
  return (
    <div>
        {!deputado.id && <h1>Carregando... Aguarde!</h1>}
        
        {deputado.id &&
            <div>
                <h1>{deputado.ultimoStatus.nome}</h1>

                <Row>
                    <Col md={4}>
                    <Card>
                        <Card.Img variant="top" src={deputado.ultimoStatus.urlFoto} />
                    </Card>
                    </Col>
                    <Col md={8}>
                        <p><strong>Data de Nascimento: </strong>{deputado.dataNascimento}</p>
                        <p><strong>Local de Nascimento: </strong>{deputado.ufNascimento}</p>
                        <p><strong>Escolaridade: </strong>{deputado.escolaridade}</p>
                        <p><strong>Condição Eleitoral: </strong>{deputado.ultimoStatus.condicaoEleitoral}</p>
                        <p><strong>Email: </strong>{deputado.ultimoStatus.email}</p>
                        <p><strong>Partido: </strong>{deputado.ultimoStatus.siglaPartido}</p>

                        <Link className='btn btn-primary' to={-1}>Voltar</Link>
                    </Col>
                </Row>
            </div>
        }
    </div>
  )
}

export default DeputadosDetalhes