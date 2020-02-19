import React, { Component } from 'react';

class UserInfo extends Component{
constructor (props) {super(props);}
  render () {

    return(
      <div>{this.props.name}</div>
    );
  }
}

export default UserInfo