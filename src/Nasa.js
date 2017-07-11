import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import NasaImage from './NasaImage'

import './Nasa.css'

class Nasa extends Component {

  state = {
    image: "",
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/nasa/image`)
  }

  render() {
    return (
      <div className="nasa">
        <img className="nasa-logo" src="https://www.festisite.com/static/partylogo/img/logos/nasa.png" alt="nasa-logo" />
        <form onSubmit={this.handleSubmit}>
            <button>Get Image</button>
        </form> 
        <Route exact path="/nasa" render={() => <h3>Click the button to see the NASA Image of the day</h3>} />
        <Route path="/nasa/image" component={NasaImage} />
      </div>
    )
  }
}

export default Nasa