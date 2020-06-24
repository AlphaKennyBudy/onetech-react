import React from 'react';
import ContactRow from './ContactRow';

import {Container, Row} from 'react-bootstrap';

function ContactTable(props) {
    return (
      <Container className="ContactTable">
        {props.users.filter(item => props.filterText!=='' ? item.name.toLowerCase().includes(props.filterText.toLowerCase()) : true).map(item => (<Row><ContactRow name={item.name} phone={'+'+item.phone} key={item.name+item.phone} onRemoveContact={props.onRemoveContact}/></Row>))}
      </Container>
    );
  }

export default ContactTable;