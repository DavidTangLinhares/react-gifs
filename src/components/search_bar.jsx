import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function

class SearchBar extends Component {
  handleChange = (event) => {
    // console.log(event.target.value);
    this.props.onSearch(event.target.value);
  }

  render() {
    return (
      <input
        className="form-search"
        type="text"
        value={this.props.search}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
