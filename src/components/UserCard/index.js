import React,{Component} from 'react';
import UserPhoto from '../userPhoto';
import UserInfo from '../UserInfo';

class UserCard extends Component{

  render(){

    return(
      <>
        <div>
          <UserPhoto user={this.props.user} styles={this.props.styles}/>
        </div>
        <div>
          <UserInfo user={this.props.user} />
        </div>
      </>

    )
  }

}

export default UserCard