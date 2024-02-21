import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CREATE_USER_URL = 'http://127.0.0.1:3000/api/v1/users';

export const createUser = createAsyncThunk('user/createUser', async (newUser) => {
  try {
    await axios.post(CREATE_USER_URL, newUser, { mode: 'cors', withCredentials: true });
    return 'Signup successful';
  } catch (err) {
    return err.false;
  }
});

export default createUser;
