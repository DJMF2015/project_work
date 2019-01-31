import React from 'react';

const SongList = (props) => {
  console.log(props)
  const feed = props.songs.map((song, index) => {
    return <tr key={index}>
    <td>{index+1}</td>
    <td>{song["im:name"]["label"]}</td>
    <td>{song["im:artist"]["label"]}</td>
    <td><a  href ={song["link"][1]["attributes"]["href"]} >Preview</a></td>
    </tr>
  })


  return (
    <table>
    { feed }
    </table>
  )
}


export default SongList;
