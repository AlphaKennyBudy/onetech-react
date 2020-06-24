import React from 'react';
import {Image, Container, Row, Col, Button} from 'react-bootstrap';

import '../css/ContactRow.css';

function ContactRow(props) {
    return (
      <Container fluid className="ContactRow">
          <Row>
              <Col xs={4}>
                <Image src="https://picsum.photos/200"  className="ProfileImage" roundedCircle/>
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