import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalPage = (props) => {

    return (
        <div>
            <Modal size="lg" show={props.show} onHide={(props.handleClose)}>
                <Modal.Header closeButton>
                    <Modal.Title>Descrição</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{textAlign:'justify'}}>{props.descricao}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Fechar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ModalPage