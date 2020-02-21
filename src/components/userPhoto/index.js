import React, { Component } from 'react';
import ColorHash from 'color-hash';

let colorHash = new ColorHash();

class UserPhoto extends Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
    };

  }

  errorHandler = () => {
    this.setState({
                    error: 'error',
                  });
  };

  imgRender = () => {

    const { user, photoStyles } = this.props;

    return (
      <img src={user.profilePicture || 'error'} alt={' '}
           className={photoStyles.userPhoto}
           onError={this.errorHandler}/>
    );

  };

  errRender = () => {
    const { user } = this.props;

    const hex = `${colorHash.hex(
      `${user.firstName} + '' + ${user.lastName}`)}`;
    console.log(hex);
    return (
      <div style={{ backgroundColor: hex }}>{user.firstName[0] +
                                             user.lastName[0]}</div>
    );
  };

  render () {

    return (
      this.state.error ? this.errRender() : this.imgRender()
    );

  }
}

export default UserPhoto;