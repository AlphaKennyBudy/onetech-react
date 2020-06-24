import React, {Component} from 'react';

import {Form} from 'react-bootstrap';

class AddContactForm extends Component {
    constructor(props) {
        super(props);

        this.handleNameTextChange = this.handleNameTextChange.bind(this);
        this.handlePhoneTextChange = this.handlePhoneTextChange.bind(this);
    }

    handleNameTextChange(e) {
        this.props.onNameTextChange(e.target.value);
    }

    handlePhoneTextChange(e) {
        this.props.onPhoneTextChange(e.target.value);
    }

    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Control type="text" placeholder="Enter name" value={this.props.newContact.name} onChange={this.handleNameTextChange}/>
                </Form.Group>
                <Form.Group>
                    <Form.Control type="number" placeholder="Enter phone number" value={this.props.newContact.phone} onChange={this.handlePhoneTextChange}/>
                </Form.Group>
            </Form>
        );
    }
}

export default AddContactForm;