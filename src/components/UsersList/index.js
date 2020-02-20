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
      error: null,
      limit: 40
    };
  }

  loadData = () => {

    let userLength=this.state.users.length;
    let limit= this.state.limit;

    this.setState({
                    isFetching: true,
                  });
    setTimeout(() => {}, 1000);
    fetch(
      `http://192.168.0.113:3030/admin/users?limit=${limit}&offset=${userLength}`)
      .then(response => response.json())
      .then(data => {
              this.setState({
                              users: [...this.state.users, ...data],
                              isFetching: false,
                            });
            }
      )
      .catch(err => {
        this.setState({
                        error: err,
                        isFetching: false
                      });
      });
  };

  componentDidMount () {
    //setTimeout(()=>{ this.loadData();},2000);
    this.loadData();
  }

  renderUsers = () => {
    const { users } = this.state;

    return users.map(userItem => (
       <li key={userItem.id} className={styles.cardContainer}>
        <UserCard user={userItem}/>
      </li>
  ));
  };

  renderSpinner = () => {
    const { isFetching } = this.state;
    if (isFetching) {
      return <Spinner/>;
    }

  };

  render () {

    return (<>
      <ul className={styles.container}>
        {
          this.renderUsers()
        }
        {
          this.renderSpinner()
        }
      </ul>
        <div onClick={this.loadData}>Load Data</div>
      </>
    );
  }

}

export default UserList;
