import React from 'react';
import MovieCover from './MovieCover'
import {withStore} from '../../store'

class Movie extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <MovieCover movie={this.props.movie} selected={this.props.selected} src={this.props.movie.images[0].url} title={this.props.movie.title} onClick={this.props.onClick} />
  }
}

Movie.defaultProps = {
  onClick: () => {},
  movie: {},
  selected: false
}

export default withStore(Movie)
