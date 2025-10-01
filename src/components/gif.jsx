import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  handleClick = (event) => {
    console.log(this.props.gifId);
    this.props.clickFunction(this.props.gifId);
  }

  render() {
    const src = `https://media4.giphy.com/media/${this.props.gifId}/giphy.gif`;
    return (
      <img
        className="gif"
        src={src}
        alt="selected Gif"
        onClick={this.handleClick}
      />
    );
  }
}

export default Gif;
