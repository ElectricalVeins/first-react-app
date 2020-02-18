/*
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

export default App;*/
import React, { Component } from 'react';
import ChildComponent from './components/ChildComponent';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isTrue: true,

    };
    console.log('constr');
  }

  componentDidMount () {
    console.log('mount');
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('upd');
  }

  componentWillUnmount () {
    console.log('unmount');
  }

  reverse=()=>{
    this.setState({
      isTrue: !this.state.isTrue,
                  })
  };

  render () {
    console.log('render');
    return (<div>
      <ChildComponent isTrue={this.state.isTrue} />
      <button onClick={this.reverse}>Click me!</button>
    </div>);
  }

}

export default App;