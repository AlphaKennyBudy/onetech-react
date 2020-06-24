import React from 'react';

function ContactRow(props) {
    return (
      <div className="ContactRow" onClick={() => props.onRemoveContact(props.name, props.phone)}>
        <img src="/" alt="" className="ProfilePicture"/>
        <h1 className="ProfileName">{props.name}</h1>
        <p className="ProfilePhone">{props.phone}</p>
      </div>
    );
  }

export default ContactRow;