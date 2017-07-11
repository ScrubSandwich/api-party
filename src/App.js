import React, { Component } from 'react'
import { Route, Switch, NavLink} from 'react-router-dom'
import Github from './Github'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="App-Headings">
            <h3>Ain't no parity like an</h3>
            <h1>API Parity</h1>
          </div>          
        </div>
        <ul className="nav-links">
            <li>
              <NavLink to='/github'>Github API</NavLink>
            </li>
          </ul>
        <Switch>
          <Route path='/github' component={Github} /> 
          <Route render={() => <p>To get started, click an above link</p>} />
        </Switch>
      </div>
    )
  }
}

export default App
