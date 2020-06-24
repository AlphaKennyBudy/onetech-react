import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ContactTable from './ContactTable';
import AddContactModal from './AddContactModal';

import {Container, Row, Col, Button} from 'react-bootstrap';

import '../css/FilterableContactTable.css';

class FilterableContactTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        users: props.users,
        show: false,
        newContact: {
            name: '',
            phone: ''
        }
      };
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleRemoveContact = this.handleRemoveContact.bind(this);
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
      this.handleSave = this.handleSave.bind(this);
      this.handleNameTextChange = this.handleNameTextChange.bind(this);
      this.handlePhoneTextChange = this.handlePhoneTextChange.bind(this);
    }
  
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
  
    handleRemoveContact(name, phone) {
      this.setState({
        users: this.state.users.filter(item => item.name!==name && item.phone!==phone)
      });
    }
    
    handleShow() {
        this.setState({
            show: true
        });
    }

    handleClose() {
        this.setState({
            show: false
        });
    }

    handleSave() {
        this.setState({
            users: [...this.state.users, this.state.newContact],
            newContact: {
                name: '',
                phone: ''
            }
        });
        this.handleClose();
    }

    handleNameTextChange(name) {
        this.setState(prevState => ({
            newContact: {
                ...prevState.newContact,
                name: name
            }
        }));
    }

    handlePhoneTextChange(phone) {
        this.setState(prevState => ({
            newContact: {
                ...prevState.newContact,
                phone: phone
            }
        }));
    }
  
    render() {
      return (
        <Container fluid className="FilterableContactTable">
            <Row>
                <Col>
                    <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange}/>
                </Col>
                <Col xs="auto">
                    <Button variant="warning" onClick={this.handleShow}>Add Contact</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ContactTable users={this.state.users} filterText={this.state.filterText} onRemoveContact={this.handleRemoveContact}/>
                </Col>
            </Row>
            <AddContactModal show={this.state.show} onClose={this.handleClose} onSave={this.handleSave} newContact={this.state.newContact} onNameTextChange={this.handleNameTextChange} onPhoneTextChange={this.handlePhoneTextChange}/>
        </Container>
        
      );
    }
  }

  export default FilterableContactTable;