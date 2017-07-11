import React, { Component } from 'react'
import './Github.css'

class Github extends Component {
  state = {
    username: "",

  }

  handleChange = (ev) => {
    this.setState({
      username: ev.target.value
    }, () => console.log('State: ' + this.state.username))
  }

  render() {
    return (
      <div className="github">
        <img className="github-logo" src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="github logo"/>
        <form>
          <div>
            <input 
              type="text" 
              placeholder="Search for a username" 
              value={this.state.username}
              onChange={this.handleChange}
            />
          </div>  
          <div>
            <button>Look up GitHub user</button>
          </div>
        </form>        
      </div>
    )
  }
}

export default Github