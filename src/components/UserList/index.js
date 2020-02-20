import React, {Component} from 'react'
import UserCard from "../UserCard";

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            users: [],
            error: null,
        }
    }

    componentDidMount() {
        this.setState({
            isFetching: true
        });
        fetch('users.json')
            .then(res => res.json())
            .then(users => {
                this.setState({
                    isFetching: false,
                    users: users,
                })
            });
    }


    render() {
        let {users} = this.state;


        return <ul>
            {users.map(user => (
                <li key={user.id}><UserCard user={user}/></li>
            ))}
        </ul>
    }
}

export default UserList;