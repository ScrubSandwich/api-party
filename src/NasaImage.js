import React, { Component } from 'react'

import './NasaImage.css'

class NasaImage extends Component {
  
  state = {
    img: '',
    title: '',
    caption: '',
  }

  constructor() {
    super()
    const api_key = '5VWtT5XQDL1zgOiTVNNoPVd38mTDGpocj9dy3iaO'
    this.fetchData(api_key)
  }

  fetchData = (key) => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`)
      .then(data => data.json())
      .then(data => {
        this.setState({img: data.hdurl})
        this.setState({title: data.title})
        this.setState({caption: data.explanation})
      })
  }

  render() {
    return (
      <div className="nasa-image">
        <h2>{this.state.title}</h2>
        <img src={this.state.img} alt='NASA star of the day'/>
        <p>{this.state.caption}</p>
      </div>
    )
  }
}

export default NasaImage