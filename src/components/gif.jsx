import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const src = `https://media4.giphy.com/media/${this.props.gifId}/giphy.gif`;

    return (
      <img className="gif" src={src} alt="selected Gif" />
    );
  }
}

export default Gif;
