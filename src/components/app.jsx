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

  handleSearch = (newSearch) => {
    this.setState({ search: newSearch });
    // console.log("handleSearch:");
    console.log(newSearch);
    // Here you could also fetch new GIFs based on newSearch
    // API to fetch array of GIFs
    giphy('bMjXzL3Y9KEZOAuAkLBcucEbvqaPoXYF').search({
      q: newSearch,
      rating: 'g',
      limit: '10'
    }, (err, res) => {
      // Res contains gif data!
      console.log(res);
      this.setState({ gifs: res.data });
      console.log(this.state.gifs);
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar
            search={this.state.search}
            onSearch={this.handleSearch}
          />
          <div className="selected-gif">
            <Gif gifId={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
