import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import About from './About'
import Home from './Home'
import PagePost from './PagePost'
import Footer from './Footer'

const MainStyle = {
	'maxWidth': '1200px',
	'marginTop': '50px'
}

class Main extends Component {
  render() {
    return (
      <div className="w3-main w3-content w3-padding" style={MainStyle}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/page/:number' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/:slug' component={PagePost} />
        </Switch>
        <Footer year="2018" />
      </div>
    )
  }
}

export default Main