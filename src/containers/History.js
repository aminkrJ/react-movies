import React from 'react';
import MovieCarousel from '../components/movies/MovieCarousel'
import {withStore} from '../store'

function History({previouslyWatched = [], movieEnded = () => {}, moviePlayed = () => {}}) {
  return <MovieCarousel movieEnded={movieEnded} moviePlayed={moviePlayed} movies={previouslyWatched} />
}

export default withStore(History)

