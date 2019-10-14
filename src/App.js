import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/ui/NavBar'
import FullscreenPlayer from './containers/FullscreenPlayer'
import Home from './containers/Home';
import History from './containers/History';
import {createStore} from './store'

class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <FullscreenPlayer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/history" component={History} />
        </Switch>
      </Router>
    );
  }
}

export default createStore(App)
