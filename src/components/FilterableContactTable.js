import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ContactTable from './ContactTable';

class FilterableContactTable extends Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        users: props.users
      };
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleRemoveContact = this.handleRemoveContact.bind(this);
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
  
    render() {
      return (
        <div className="FilterableContactTable">
          <SearchBar filterText={this.state.filterText} onFilterTextChange={this.handleFilterTextChange}/>
          <ContactTable users={this.state.users} filterText={this.state.filterText} onRemoveContact={this.handleRemoveContact}/>
        </div>
      );
    }
  }

  export default FilterableContactTable;