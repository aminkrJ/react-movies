import React from 'react';

function MovieCover(props){
  const coverStyle = {
    width: '150px',
    height: '250px',
    objectFit: 'cover'
  }

  if(props.selected) coverStyle['border'] = '1px solid #000'

  return (
    <div style={props.style} onClick={(e) => {props.onClick(props.movie)}}>
      <img style={coverStyle} src={props.src}/>
      <div>{props.title}</div>
    </div>
  )
}

export default MovieCover
