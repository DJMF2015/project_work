
import React, {Component} from 'react';
import Song from '../components/Song.js';
import SongList from '../components/SongList.js';

class MusicContainer extends Component {

  constructor(props) {
    super(props);
    this.states = {
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
      <>
      <h2>iTunes Top20</h2>
      <Song />
      <SongList/>
      </>
    )
  }

}
export default MusicContainer;












// https://open.spotify.com/search/shadow%20of%20the%20beast
