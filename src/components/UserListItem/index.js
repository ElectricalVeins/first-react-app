import React,{Component} from 'react';

function UserListItem (props) {

  return (
    <li>{`${props.user.name} ${props.user.lastName}`}</li>
  );

}

export default UserListItem;