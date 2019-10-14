import React from 'react'
import Fullscreen from "react-full-screen";
import VideoPlayer from '../components/utils/VideoPlayer'
import {withStore} from '../store'
import _ from 'underscore'

const fullscreen = {
  position: 'fixed',
  right: 0,
  bottom: 0,
  minWidth: '90%',
  minHeight: '90%',
}

class FullscreenPlayer extends React.Component {
  handleFullScreenChange(playing) {
   if(!playing) this.props.movieEnded()
  }

  render() {
    const playing = !_.isEmpty(this.props.playingMovie)
    return (
      <Fullscreen enabled={playing} onChange={this.handleFullScreenChange.bind(this)}>
        {playing && <VideoPlayer style={fullscreen} video={this.props.playingMovie.contents[0]} />}
      </Fullscreen>
    )
  }
}

export default withStore(FullscreenPlayer)
