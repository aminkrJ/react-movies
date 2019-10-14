import React from 'react';

function FlexContainer(props) {
  let style = {
    display: 'flex',
    flexWrap: 'wrap'
  }

  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

export default FlexContainer
