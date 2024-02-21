import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { createUser } from '../redux/actions/signup';

const toSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);

const SignUp = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    passwordConfirmation: '', // Updated to camel case
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form)); // Convert form data to object
    const newUser = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [toSnakeCase(key), value]),
    );
    dispatch(createUser(newUser));
    setFormData({
      username: '',
      password: '',
      passwordConfirmation: '',
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="LoginFormSection">
      <p>
        Back to
        <Link to="/">
          Login Page
        </Link>
      </p>
      <h2>Sign up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} placeholder="john001" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword1">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="passwordConfirmation" value={formData.passwordConfirmation} onChange={handleChange} placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
