import React, {Component} from 'react';

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
        <input type="text" placeholder="Search contacts" value={filterText} onChange={this.handleFilterTextChange}/>
      );
    }
  }

export default SearchBar;