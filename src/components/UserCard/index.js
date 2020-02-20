import React, { Component } from 'react';
import UserPhoto from '../userPhoto';
import UserInfo from '../UserInfo';
import photoStyles from './photoStyles.module.css';

class UserCard extends Component {

  render () {

    const {user}=this.props;

    return (
      <>
        <UserPhoto user={user} photoStyles={photoStyles}/>
        <div>
          <UserInfo user={user}/>
        </div>
      </>

    );
  }

}

export default UserCard;