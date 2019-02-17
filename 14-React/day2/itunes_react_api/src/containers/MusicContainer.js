
import React, {Component, Fragment} from 'react';
import SongList from '../components/SongList.js';

class MusicContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      currentSong: null
    }
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(data => this.setState({songs: data.feed.entry}));
  }

  render() {
    return(
        <div className="text">
        <h1><center>iTunes UK Top 20</center></h1>
        <SongList songs={this.state.songs}  />
      </div>
    )
  }

}
export default MusicContainer;












// https://open.spotify.com/search/shadow%20of%20the%20beast
