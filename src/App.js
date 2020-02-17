import React, { Component } from 'react';
import UsersList from './components/UserList';

const usersData = [
  {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }, {
    name: 'name1',
    lastName: 'lastname'
  }];

class App extends Component {

  constructor (props) {
    super(props);
    console.log(this.props);
  }

  render () {
    return (
      <UsersList users={usersData}/>
    );
  }
}

export default App;