import React, { Component } from 'react';
import Gif from './gif';
import SearchBar from './search_bar';

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
          <div className="gif-list">
            <img className='gif' src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXIyaTJvZDV2NXVydHozcmgyOHU2bHpyMWg4d3F2cDF3OWVreHRjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/swGGWrTpKIJLzIZ9az/giphy.gif" alt="" />
            <img className='gif' src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXIyaTJvZDV2NXVydHozcmgyOHU2bHpyMWg4d3F2cDF3OWVreHRjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/swGGWrTpKIJLzIZ9az/giphy.gif" alt="" />
            <img className='gif' src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXIyaTJvZDV2NXVydHozcmgyOHU2bHpyMWg4d3F2cDF3OWVreHRjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/swGGWrTpKIJLzIZ9az/giphy.gif" alt="" />
            <img className='gif' src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXIyaTJvZDV2NXVydHozcmgyOHU2bHpyMWg4d3F2cDF3OWVreHRjbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/swGGWrTpKIJLzIZ9az/giphy.gif" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
