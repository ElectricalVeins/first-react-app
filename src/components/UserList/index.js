import React,{Component} from 'react';
import UserListItem from '../UserListItem';

function UserList (props) {

  return (
    <ol>{
      props.users.map((user,index,arr)=>{
        return <UserListItem key={index} user={user} />
      })
    }</ol>
  );
}

export default UserList;