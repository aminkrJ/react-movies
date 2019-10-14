import React from 'react';
import MovieCarousel from '../components/movies/MovieCarousel'
import {withStore} from '../store'

function Home({movies = [], fetchMovies = () => {}, movieEnded = () => {}, moviePlayed = () => {}}) {
  fetchMovies()

  return <MovieCarousel movieEnded={movieEnded} moviePlayed={moviePlayed} movies={movies} />
}

export default withStore(Home)
