import React, { Component } from 'react';
import giphy from 'giphy-api';

import Gif from './gif';
import SearchBar from './search_bar';
import GifList from './gif_list';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "Z1awblkp2wMMGtx3wB",
      search: "Tigerente",
    };
  }

  componentDidMount() {
    const { search } = this.state;
    this.handleSearch(search);
  }

  handleSearch = (newSearch) => {
    // console.log(newSearch);
    // Here you could also fetch new GIFs based on newSearch
    this.setState({ search: newSearch });
    // API to fetch array of GIFs
    giphy('bMjXzL3Y9KEZOAuAkLBcucEbvqaPoXYF').search({
      q: newSearch,
      rating: 'g',
      limit: '10'
    }, (err, res) => {
      // Res contains gif data!
      // console.log(res);
      this.setState({ gifs: res.data });
      // console.log(this.state.gifs);
    });
  }

  handleClick = (selectedGifId) => {
    // console.log(gifId);
    this.setState({ selectedGifId });
  }

  render() {
    const { search, selectedGifId, gifs } = this.state;
    return (
      <div>
        <div className="left-scene">
          <SearchBar
            search={search}
            onSearch={this.handleSearch}
          />
          <div className="selected-gif">
            <Gif gifId={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList
            gifs={gifs}
            clickFunction={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
