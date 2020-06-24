import React, {Component} from 'react';

import AddContactForm from './AddContactForm';

import {Modal, Form, Button} from 'react-bootstrap';

class AddContactModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<Modal show={this.props.show} onHide={this.props.onClose}>
                <Modal.Header closeButton>
                <Modal.Title>Add Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddContactForm newContact={this.props.newContact} onNameTextChange={this.props.onNameTextChange} onPhoneTextChange={this.props.onPhoneTextChange}/>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.props.onClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.props.onSave}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>);
    }
}

export default AddContactModal;