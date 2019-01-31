import React from 'react';

const SongList = (props) => {
  console.log(props)
  const feed = props.songs.map((song, index) => {
    return <p key={index}>{song["im:name"]["label"]}</p>
  })

  // function handleChange(event) {
  //   props.onHogwartSelected(event.target.value);
  // }

  return (
    <div>
    { feed }
    </div>
  )
}


export default SongList;
