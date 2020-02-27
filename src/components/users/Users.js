import React from 'react';
import './Users.css';
import User from "../user/User";
import Button from "../button/Button";
import Loader from 'react-loader-spinner';

function Users({ data, showMore }) {
  return (
    data
      ?
      <div className="users" id="users">
        <div className="container">
          <div className="users__title">
            Our cheerful users
                    </div>
          <div className="users__subtitle">
            Attention! Sorting users by registration date
                    </div>
          <div className="users__list">
            {data.users.map(user => <User user={user} key={user.id} />)}
          </div>
          <div className="users__btn">
            <Button value="Show more" func={showMore} />
          </div>
        </div>
      </div>
      :
      <div className="container">
        <div className="loader">
          <Loader
            type="Oval"
            color="#007bff"
            height={60}
            width={60}
          />
        </div>
      </div>
  );
}

export default Users;
