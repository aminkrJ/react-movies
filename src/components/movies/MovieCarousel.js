import React from 'react';
import {Link} from 'react-router-dom'
import Carousel from '../utils/Carousel'
import Movie from './Movie'
import _ from 'underscore'
import {withStore} from '../../store'

class MovieCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0
    }

    this.handleActiveIndexChange = this.handleActiveIndexChange.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
    this.handleMovieClick = this.handleMovieClick.bind(this)
  }

  handleActiveIndexChange(activeIndex) {
    this.setState({ activeIndex })
  }

  handleEnter(index) {
    this.props.moviePlayed(this.props.movies[index])
  }

  handleMovieClick(movie) {
    this.props.moviePlayed(movie)
  }

  renderMovies() {
    return _.map(this.props.movies, (movie, index) => {
      return(
        <Movie key={movie.id} movie={movie} onClick={this.handleMovieClick} selected={this.state.activeIndex === index} />
      )
    })
  }

  render() {
    return (
      <Carousel activeIndex={this.state.activeIndex} onEnter={this.handleEnter} onActiveIndexChange={this.handleActiveIndexChange}>
        {this.renderMovies()}
      </Carousel>
    )
  }
}

MovieCarousel.defaultProps = {
  movies: {},
  onMovieClick: () => {}
}

export default withStore(MovieCarousel)
