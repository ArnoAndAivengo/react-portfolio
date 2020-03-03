import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router} from 'react-router-dom'
import Routes from 'routes'

import './resources/css/index.css';
import './resources/css/default.css';
import './resources/css/fonts.css';
import './resources/css/layout.css';
import './resources/css/magnific-popup.css';
import './resources/css/media-queries.css';
import './resources/css/font-awesome/scss/font-awesome.scss';

const App = () => {
  return (
      <Router>
        <Routes />
      </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

