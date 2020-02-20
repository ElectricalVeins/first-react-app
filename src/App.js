import React, { Component } from 'react';
import UserList from './components/UsersList';
import './index.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state={

    };
  }

  render () {
    return <UserList/>
  }

}

export default App;