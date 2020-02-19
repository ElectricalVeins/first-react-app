import React, { Component } from 'react';
import styles from './styles.module.css';
import Spinner from '../Spinner';
import UserCard from '../UserCard';

class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [],
      error: null
    };
  }

  componentDidMount () {
    this.setState({
                    isFetching: true,
                  });
    setTimeout(() => {}, 1000);
    fetch('./users.json').then(response => response.json())
                         .then(users => {
                                 this.setState({
                                                 users,
                                                 isFetching: false,
                                               });
                               }
                         ).catch(err=>{
                           this.setState({
                             error: err,
                             isFetching:false
                                         })
    });
  }

  render () {
    const { users, isFetching } = this.state;
    const userComponents = users.map(userItem => {
                                       return (<li
                                         key={this.props.id}><UserCard user={userItem}/></li>);
                                     }
    );

    return (
      <ul className={styles.container}>

        {
          userComponents
        }
        {
          isFetching && <Spinner/>
        }

      </ul>
    );
  }

}

export default UserList;
