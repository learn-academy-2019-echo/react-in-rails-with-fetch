import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Dogs from './Dogs'
class MainApp extends React.Component {
  render () {
    return (
      <Router>
        <h1>Yo Dog,  I heard you like dogs in your dog app.</h1>
        <Route path="/" component={Dogs} />
      </Router>
    );
  }
}

export default MainApp
