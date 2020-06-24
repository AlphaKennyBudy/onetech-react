import React from 'react';
import ContactRow from './ContactRow';

function ContactTable(props) {
    return (
      <div className="ContactTable">
        {props.users.filter(item => props.filterText!=='' ? item.name.toLowerCase().includes(props.filterText.toLowerCase()) : true).map(item => (<ContactRow name={item.name} phone={'+'+item.phone} key={item.name+item.phone} onRemoveContact={props.onRemoveContact}/>))}
      </div>
    );
  }

export default ContactTable;