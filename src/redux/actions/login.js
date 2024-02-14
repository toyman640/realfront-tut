import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_USER_URL = 'http://127.0.0.1:3000/api/v1/login';

export const logUser = createAsyncThunk('user/createUser', async (userDetails) => {
  try {
    const response = await axios.post(LOGIN_USER_URL, userDetails, { mode: 'cors', withCredentials: true });

    const { data } = response;
    return data;
  } catch (err) {
    return err.message;
  }
});

export default logUser;
