import React, { Component } from 'react'
import './Github.css'

class GithubUser extends Component {
  constructor(props){
    super(props)

    this.state = {
      user: {}
    }

    this.fetchUserData()    
  }

  fetchUserData = () => {
    fetch(`https:api.github.com/users/${this.props.match.params.username}`)
      .then(data => data.json())
      .then(user => this.setState({ user }))
  }

  render() {
    const { user } = this.state
    return (
      <div className="github-user">
        <img src={user.avatar_url} alt="avatar" />
        <h2>Username: {user.login}</h2>
        <h3>Followers: {user.followers}</h3>
        <h3>Following: {user.following}</h3>
        <h3>Location: {user.location}</h3>
        <a href={user.html_url} target="_">Link to the profile</a>
        <p></p>
        <p></p>
        <p></p>
      </div>
    )
  }
}

export default GithubUser