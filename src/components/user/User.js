import React from 'react';
import './User.css';

function User(props) {
  const { photo, name, position, email, phone } = props.user;
  return (
    <div className="user">
      <div className="user-content">
        <img className="user__photo" src={photo} alt={name} />
        <div className="user__name">{name}</div>
        <div className="user__position">{position}</div>
        <div
          className="user__email"
          data-toggle="tooltip"
          data-placement="top"
          title={email}
        >
          {email}
        </div>
        <div className="user__phone">{phone}</div>
      </div>
    </div>
  );
}

export default User;
