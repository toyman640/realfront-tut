import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import { logUser } from '../redux/actions/login';
import { logUser } from '../redux/reducers/login';
// import { logUserIn } from '../redux/reducers/login';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.username.value;
    const password = form.password.value;

    const userInfo = {
      username,
      password,
    };

    try {
      const response = await dispatch(logUser(userInfo));
      if (response.payload && response.payload.user.data.attributes) {
        // Successful login, navigate to the home page
        navigate('/home-page');
      } else {
        setLoginError('Could not authenticate your account');
      }
    } catch (error) {
      // Handle login error
      const response = await dispatch(logUser(userInfo));
      if (response.payload && response.payload.status === 401) {
        setLoginError('Could not authenticate your account');
      } else if (error.message && error.message.error) {
        setLoginError(error.message.error);
      } else {
        setLoginError('An error occurred. Please try again.'); // Generic error message
      }
    }
  };

  return (
    <div className="LoginFormSection">
      <h3>Login</h3>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter Username" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p>
          new user?
          <Link to="/register">
            sign up
          </Link>
          here
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
