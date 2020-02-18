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

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0
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

  incrementCounter = () => {
    this.setState({
                    count: this.state.count + 1
                  });


  };

  decrementCounter = () => {
    this.setState({
                    count: this.state.count - 1
                  });

  };

  render () {
    console.log('render');
    return (<div>
      <h1>{this.state.count}</h1>
      <button onClick={this.incrementCounter}>+</button>
      <button onClick={this.decrementCounter}>-</button>
      <input onInput={(e)=>{
        this.setState({count: e.currentTarget.value})
      }} type="text"/>
      <button onClick={this.setCount}>Apply</button>
    </div>);
  }

}

export default App;