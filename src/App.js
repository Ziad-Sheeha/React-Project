import React, { useState } from 'react';
import Form from './components/Form/Form';
import User from './components/Users/User';
import './Wrapper.css';

function App() {
  const [data, setData] = useState([]);

  const addingUserHandler = (inputData) => {
    setData((prevState) => {
      return [...prevState, inputData];
    });
  };
  return (
    <div className="wrapper">
      <Form onAddUser={addingUserHandler} />
      <User
        data={data}
      />
    </div>
  );
}

export default App;
