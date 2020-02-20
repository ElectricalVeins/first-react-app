import React, { Component } from 'react';

class UserInfo extends Component {

  render () {
    const { user } = this.props;

    return (<>
        <div>Name: {user.firstName + ' ' + user.lastName}</div>
        <div>Email: {user.email}</div>
      </>
    );
  }
}

export default UserInfo;