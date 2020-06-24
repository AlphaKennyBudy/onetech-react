import React, {Component} from 'react';

import {Form} from 'react-bootstrap';

import '../css/SearchBar.css';
class SearchBar extends Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
  
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    };
  
    render() {
      const filterText = this.props.filterText;
      return (
        <Form.Control type="text" className="SearchBar" placeholder="Search contacts" value={filterText} onChange={this.handleFilterTextChange}/>
      );
    }
  }

export default SearchBar;