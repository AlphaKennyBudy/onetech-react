import React from 'react';
import {Image, Container, Row, Col, Button} from 'react-bootstrap';

import '../css/ContactRow.css';

function ContactRow(props) {
    return (
      <Container fluid className="ContactRow">
          <Row>
              <Col xs={4}>
                <Image src="https://avatars2.githubusercontent.com/u/48881444?s=460&u=a2317274ce4b7c57e3c87e604e55595d65d02a2a&v=4"  className="ProfileImage" roundedCircle/>
              </Col>
              <Col>
                <h1 className="ProfileName">{props.name}</h1>
                <p className="ProfilePhone">{props.phone}</p>
              </Col>
              <Col xs={3} className="RemoveButton">
                <Button variant="danger" onClick={() => props.onRemoveContact(props.name, props.phone)}>Remove</Button>
              </Col>
          </Row>
      </Container>
    );
  }

export default ContactRow;