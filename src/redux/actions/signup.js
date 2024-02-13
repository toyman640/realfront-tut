import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const CREATE_USER_URL = 'http://127.0.0.1:3000/api/v1/users';

export const createUser = createAsyncThunk('user/createUser', async (newUser) => {
  try {
    const response = await axios.post(CREATE_USER_URL, newUser, { mode: 'cors', withCredentials: true });

    const { data } = response;
    return data;
  } catch (err) {
    return err.message;
  }
});

export default createUser;
