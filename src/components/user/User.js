import React from 'react';
import './User.css';

function User(props) {
    const {photo, name, position, email, phone} = props.user;
    return (
        <div className="user">
            <div className="user-content">
                <img src={photo} alt={name} className="user__photo"/>
                <div className="user__name">{name}</div>
                {name.length > 16 ? <div className="user__tooltip">{name}</div> : ''}
                <div className="user__position">{position}</div>
                <div className="user__email">{email}</div>
                <div className="user__phone">{phone}</div>
            </div>
        </div>
    );
}

export default User;
