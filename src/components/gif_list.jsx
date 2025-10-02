import React, { Component } from 'react';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    const { gifs, clickFunction } = this.props;
    return (
      <div className="gif-list">
        {gifs.map(gif => (
          <Gif
            key={gif.id}
            gifId={gif.id}
            clickFunction={clickFunction}
          />
        ))}
      </div>
    );
  }
}

export default GifList;
