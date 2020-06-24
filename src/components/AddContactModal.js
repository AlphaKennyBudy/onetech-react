import React from 'react';

import AddContactForm from './AddContactForm';

import {Modal, Button} from 'react-bootstrap';

function AddContactModal(props) {
    return (<Modal show={props.show} onHide={props.onClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Contact</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AddContactForm newContact={props.newContact} onNameTextChange={props.onNameTextChange} onPhoneTextChange={props.onPhoneTextChange}/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
                Close
            </Button>
            <Button variant="primary" onClick={props.onSave}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>);
}


export default AddContactModal;