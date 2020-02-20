import React,{Component} from 'react';
import UserPhoto from '../userPhoto';
import UserInfo from '../UserInfo';
import photoStyles from './photoStyles.module.css'

class UserCard extends Component{

  render(){

    return(
      <>
        <div>
          <UserPhoto user={this.props.user} photoStyle={photoStyles} />
        </div>
        <div>
          <UserInfo user={this.props.user} />
        </div>
      </>

    )
  }

}

export default UserCard