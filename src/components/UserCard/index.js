import React, {Component} from 'react'

class UserCard extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {firstName,lastName,information,userPhoto}=this.props.user;
        return (<>
                <div>
                    <img src={userPhoto} alt="user Photo"/>
                </div>
                <div>
                    {firstName+' '+ lastName}
                </div>
                <div>
                    {information}
                </div>
            </>
        );
    }
}

export default UserCard;