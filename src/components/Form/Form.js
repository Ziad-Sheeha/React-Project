import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {
  // Get The Inputs Data
  const [inputData, setInputData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    age: '',
  });

  // Handling Inputs Function
  const firstNameHandler = (e) => {
    setInputData((prevState) => {
      return { ...prevState, firstName: e.target.value };
    });
  };
  const lastNameHandler = (e) => {
    setInputData((prevState) => {
      return { ...prevState, lastName: e.target.value };
    });
  };
  const userNameHandler = (e) => {
    setInputData((prevState) => {
      return { ...prevState, userName: e.target.value };
    });
  };
  const ageHandler = (e) => {
    setInputData((prevState) => {
      return { ...prevState, age: e.target.value };
    });
  };
  // End Of Handling Inputs Function

  // Handling Form Submtion
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setInputData({ firstName: '', lastName: '', userName: '', age: '' }); 
    // connection to the app Parent
    props.onAddUser(inputData);
    // End Of connection to the app Parent
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>First Name</label>
          <br />
          <input
            required  
            value={inputData.firstName}
            onChange={firstNameHandler}
            type="text"
          />
        </div>
        <div>
          <label>Last Name</label> <br />
          <input
            required
            value={inputData.lastName}
            onChange={lastNameHandler}
            type="text"
          />
        </div>
        <div>
          <label>Unique Username </label>
          <br />
          <input
            required
            value={inputData.userName}
            onChange={userNameHandler}
            type="text"
          />
        </div>
        <div>
          <label>Age (Years)</label> <br />
          <input
            required
            value={inputData.age}
            onChange={ageHandler}
            type="number"
            min="1"
          />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default Form;
