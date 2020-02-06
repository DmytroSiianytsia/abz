import React, {Component} from 'react';
import './Users.css';
import User from "../user/User";
import Button from "../button/Button";

class Users extends Component {
    state = {
        data: null,
        countUsers: 6
    };

    urlUsers = `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${this.state.countUsers}`;

    getUsers = () => {
        fetch(this.urlUsers)
            .then(response => response.json())
            .then(data => this.setState({data: data}))

    };

    showMore = () => {
      this.setState(prevState => ({
           countUsers: prevState.countUsers + 6
      }))
        console.log(this.state.countUsers)
    };

    componentDidMount() {
        this.getUsers()
    }

    render() {
        const {data} = this.state;
        if (!data) return <div>Loading...</div>;
        console.log(data)

        return (
            <div className="users">
                <div className="container">
                    <div className="users__title">
                        Our cheerful users
                    </div>
                    <div className="users__subtitle">
                        Attention! Sorting users by registration date
                    </div>
                    <div className="users__list">
                        {data.users.map(user => <User user={user} key={user.id}/>)}
                    </div>
                    <div className="users__btn">
                        <Button value="Show more" func={this.showMore}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Users;
