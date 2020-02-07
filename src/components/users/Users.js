import React from 'react';
import './Users.css';
import User from "../user/User";
import Button from "../button/Button";

function Users({data, showMore}) {
    return (
        data
            ?
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
                        <Button value="Show more" func={showMore}/>
                    </div>
                </div>
            </div>
            :
            <div>Loading...</div>
    );
}

export default Users;
