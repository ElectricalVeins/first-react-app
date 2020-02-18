import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {};
    console.log('ChildComponentConstructor');
  }

  componentDidMount () {
    console.log('child mount');
  }

  componentDidUpdate (prevProps, prevState, snapshot) {
    console.log('child update');
  }

  componentWillUnmount () {
    console.log('child unmount');
  }

  render () {
    console.log('child render');
    return (
      <h1>Child Component and boolean value of parent is {String(this.props.isTrue)}</h1>
    );

  }

}

export default ChildComponent;