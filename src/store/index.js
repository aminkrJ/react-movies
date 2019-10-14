import React from 'react'
import {actions} from '../actions'

const StoreContext = React.createContext()

const createStore = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        movies: [],
        previouslyWatched: [],
        playingMovie: {}
      }
    }

    render() {
      return (
        <StoreContext.Provider value={{...this.state, ...actions(this)}}>
          <WrappedComponent {...this.props} />
        </StoreContext.Provider>
      )
    }
  }
}

const withStore = WrappedComponent => {
  return class extends React.Component {
    render() {
      return (
        <StoreContext.Consumer>
          {context => (<WrappedComponent {...context} {...this.props} />)}
        </StoreContext.Consumer>
      )
    }
  }
}

export { createStore, withStore }
