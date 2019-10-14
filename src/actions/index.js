export const actions = function(store) {
  return {
    moviePlayed: (playingMovie) => {
      const index = store.state.previouslyWatched.map((m) => (m.id)).indexOf(playingMovie.id)
      let previouslyWatched = []
      if(index === -1){
        previouslyWatched = [playingMovie, ...store.state.previouslyWatched]
      } else {
        previouslyWatched = [playingMovie, ...store.state.previouslyWatched.slice(0, index), ...store.state.previouslyWatched.slice(index + 1)]
      }

      store.setState({ previouslyWatched, playingMovie })
    },
    movieEnded: (movie) => {
      store.setState({playingMovie: {}})
    },
    fetchMovies: () => {
      fetch('https://demo2697834.mockable.io/movies').then((response) => {
        response.json().then((data) => {
          // optimization note: reducing the computational complexity to O(1) by using Normalizr
          store.setState({
            movies: data.entries
          })
        })
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}


