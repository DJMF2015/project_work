import React from 'react';

const SongList = (props) => {
  console.log(props)
  const feed = props.songs.map((song, index) => {
    return <tr key={index}>
      <td>{index+1}</td>
      <td>{song["im:name"]["label"]}</td>
      <td>{song["im:artist"]["label"]}</td>
      <td><img src ={song["im:image"][0]["label"]} alt="image"></img></td>
      <td><audio controls src ={song["link"][1]["attributes"]["href"]}>Preview</audio></td>
    </tr>
  })


  return (
    <table>
      { feed }
    </table>
  )
}


export default SongList;
