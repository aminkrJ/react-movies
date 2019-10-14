import React from 'react';
import MovieCarousel from '../components/movies/MovieCarousel'
import {withStore} from '../store'

function Home({movies = [], fetchMovies = () => {}}) {
  fetchMovies()

  return <MovieCarousel movies={movies} />
}

export default withStore(Home)
