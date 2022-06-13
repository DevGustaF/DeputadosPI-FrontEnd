import React, { useEffect, useState } from 'react'
import { Col, ListGroup, Row } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'

const Partidos = () => {
    const [partidos, setPartidos] = useState([])
    const [dadosPartido, setDadosPartido] = useState([])
    useEffect(() => {
        apiDeputados.get('partidos').then(resultado => {
            setPartidos(resultado.data.dados)
            partidos.forEach(p => {
                apiDeputados.get('partidos/' + p.id).then(resultado =>{
                    setDadosPartido(oldArray => [...oldArray, resultado.data.dados])
                })
            })
        })
    }, [partidos])

    const getDadoPartido = (id => {
        return dadosPartido.find(d => d.id === id)
    })

  return (
    <>
        
    <Row>
        <ListGroup>
            <ListGroup.Item>
                <h3 style={{ textAlign: 'center' }}>Partidos</h3>
            </ListGroup.Item>
            {partidos.map(item => (
                <ListGroup.Item  key={item.id} action href={'/partidos/' + item.id}>
                    <Col>
                        <strong>{item.sigla}</strong> 
                        <Row>
                            <Col>
                                Nome: {getDadoPartido(item.id)?.nome}
                            </Col>
                            <Col>
                                Situação: {getDadoPartido(item.id)?.status.situacao}
                            </Col>
                            <Col>
                                Qtd. Membros: {getDadoPartido(item.id)?.status.totalMembros}
                            </Col>
                        </Row>
                    </Col>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </Row>
    </>


  )
}

export default Partidos