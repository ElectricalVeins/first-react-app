import React, { Component } from 'react';
import ColorHash from 'color-hash';
//import classNames from 'classnames'

let colorHash = new ColorHash();

class UserPhoto extends Component {

  render () {
    const { user } = this.props;

    const hex = `backgroundColor: ${colorHash.hex(
      `${user.name} + '' + ${user.lastName}`)}`;
    console.log(hex);

    const source = user.userPhoto && hex;

    return (
      <img src={source} className={this.props.styles}/>
    );
  }
}

export default UserPhoto;