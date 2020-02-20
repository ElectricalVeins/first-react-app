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

  imgRender = () => {

    const { user, photoStyles } = this.props;

    return (
      <img src={user.profilePicture} alt={' '}
           className={photoStyles.userPhoto}
           onError={e => {
             this.setState({
                             error: e.target.error,
                           });
           }}/>
    );
  };

  errRender = () => {
    const { user } = this.props;

    const hex = `backgroundColor: ${colorHash.hex(
      `${user.firstName} + '' + ${user.lastName}`)}`;

    return (<>
      <div style={{ backgroundColor: hex }}>{user.firstName[0] +
                                             user.lastName[0]}</div>
    </>);
  };

  render () {
    return (
      this.imgRender() || this.errRender()
    )
  }
}

export default UserPhoto;