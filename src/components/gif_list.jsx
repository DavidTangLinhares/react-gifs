import React, { Component } from 'react';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map((gif) => (
          <Gif
            key={gif.id}
            gifId={gif.id}
          />
        ))}
      </div>
    );
  }
}

export default GifList;
