import React, { Component } from 'react';
import ColorHash from 'color-hash';
import classNames from 'classnames'

let colorHash = new ColorHash();

class UserPhoto extends Component {

  render () {
    const { user, photoStyle } = this.props;

    const hex = `backgroundColor: ${colorHash.hex(
      `${user.name} + '' + ${user.lastName}`)}`;
    const source = user.profilePicture || hex;


    return (
      <img src={source} alt={' '} className={photoStyle.userPhoto}/>
    );
  }
}

export default UserPhoto;