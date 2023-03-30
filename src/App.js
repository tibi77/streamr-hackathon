import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav/Nav';
import Auth from './utils/AuthService';

const auth = new Auth();

class App extends Component {
  render() {
    return (
      <div className="App container is-fluid">
        <NavBar auth={auth}/>
        <br/>
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
