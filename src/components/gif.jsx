import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  shouldComponentUpdate (nextProps) {
    return this.props.gifId !== nextProps.gifId;
  }

  handleClick = () => {
    const { clickFunction, gifId } = this.props;
    // console.log(gifId);
    clickFunction(gifId);
  }

  render() {
    const { gifId } = this.props;
    if (!gifId) {
      return null;
    }
    console.log(`gif rendering - ${gifId}`);

    const src = `https://media4.giphy.com/media/${gifId}/giphy.gif`;
    return (
      <button
        type="button"
        className="gif-button"
        onClick={this.handleClick}
        style={{ border: "none", background: "transparent", padding: 0 }}
      >
        <img className="gif" src={src} alt="Gif preview" />
      </button>
    );
  }
}

export default Gif;
