import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function

class SearchBar extends Component {
  handleChange = (event) => {
    // console.log(event.target.value);
    const { onSearch } = this.props;
    onSearch(event.target.value);
  }

  render() {
    const { search } = this.props;
    return (
      <input
        className="form-search"
        type="text"
        value={search}
        onChange={this.handleChange}
      />
    );
  }
}

export default SearchBar;
