import React, { Fragment, useState } from 'react';
import './App.css';

function App() {
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    country: ""
  });

  const [errorFields, setErrorFields] = useState({
    firstName: false,
    lastName: false,
    email: false,
    gender: false,
    country: false
  });

  const handleChange = (event) => {
    setFields(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  const isValidOnSubmit = () => {
    const errors = {
      firstName: fields.firstName === "",
      lastName: fields.lastName === "",
      email: fields.email === "",
      gender: fields.gender === "",
      country: fields.country === ""
    };

    setErrorFields(errors);

    return !Object.values(errors).some(error => error === true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidOnSubmit()) {
      console.log(fields);
    }
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit} noValidate autoComplete='off'>
        <h1>Register</h1>
        <p className='caption'>Please fill the form</p>

        <div className='input-section'>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            id='firstName'
            name='firstName'
            onChange={handleChange}
          />
          {errorFields.firstName && <p className='danger'>First Name is required</p>}
        </div>

        <div className='input-section'>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            id='lastName'
            name='lastName'
            onChange={handleChange}
          />
          {errorFields.lastName && <p className='danger'>Last Name is required</p>}
        </div>

        <div className='input-section'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            onChange={handleChange}
          />
          {errorFields.email && <p className='danger'>Email is required</p>}
        </div>

        <div className='input-section radio-groups'>
          <label htmlFor='gender'>Gender:</label>
          <div>
            <label htmlFor='male' className='radio-button'>Male:</label>
            <input
              type='radio'
              id='male'
              name='gender'
              value='male'
              onChange={handleChange}
            />
            <label htmlFor='female' className='radio-button'>Female:</label>
            <input
              type='radio'
              id='female'
              name='gender'
              value='female'
              onChange={handleChange}
            />
          </div>
          {errorFields.gender && <p className='danger'>Gender is required</p>}
        </div>

        <div className='input-section dropdown-section'>
          <label htmlFor='country'>Country:</label>
          <select name='country' onChange={handleChange}>
            <option value=''>Select</option>
            <option value='UAE'>UAE</option>
            <option value='INDIA'>India</option>
            <option value='QATAR'>Qatar</option>
          </select>
          {errorFields.country && <p className='danger'>Country is required</p>}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  );
}

export default App;
