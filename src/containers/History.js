import React from 'react';
import MovieCarousel from '../components/movies/MovieCarousel'
import {withStore} from '../store'

function History({previouslyWatched = []}) {
  return <MovieCarousel movies={previouslyWatched} />
}

export default withStore(History)

