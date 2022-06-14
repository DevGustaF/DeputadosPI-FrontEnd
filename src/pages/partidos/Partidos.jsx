import React, { useEffect, useState } from 'react'
import { Table, Row } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'
import { Link } from '@chakra-ui/react'
import { BsInfoSquareFill } from 'react-icons/bs'

const Partidos = () => {
    const [partidos, setPartidos] = useState([])
    const [dadosPartido, setDadosPartido] = useState([])
    useEffect(() => {
        apiDeputados.get('partidos').then(resultado => {
            setPartidos(resultado.data.dados)
            partidos.forEach(p => {
                apiDeputados.get('partidos/' + p.id).then(resultado => {
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
                <h3 className='mb-3' style={{ textAlign: 'center' }}>Eventos</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th >Detalhes</th>
                            <th >Sigla</th>
                            <th >Nome</th>
                            <th >Situação</th>
                            <th >Qtd. Membros</th>
                        </tr>
                    </thead>
                    <tbody>
                        {partidos.map(item => (
                            <tr key={item.id}>
                                <td ><Link className='btn btn-outline-dark' href={'/partidos/' + item.id}><BsInfoSquareFill /> Info</Link></td>
                                <td >{item.sigla}</td>
                                <td >{getDadoPartido(item.id)?.nome}</td>
                                <td >{getDadoPartido(item.id)?.status.situacao}</td>
                                <td >{getDadoPartido(item.id)?.status.totalMembros}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </>
    )
}

export default Partidos