import React from 'react';
import './User.css';

const User = (props) => {
  return (
    <div>
      <div className="users-container">
        <h2>
          <span className="total-users">{props.data.length}</span> Users
        </h2>
        {props.data.map((user) => (
          <fieldset key={Math.random().toString()}>
            <legend>{user.userName}</legend>
            <div className="user-info">
              <h4>{user.firstName + ` ${user.lastName}`}</h4>
              <span>
                ( <span className="age-num">{user.age}</span> Years Old )
              </span>
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  );
};

export default User;
