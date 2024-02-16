import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGGED_USER_URL = 'http://127.0.0.1:3000/api/v1/logged_in';

export const loggedIn = createAsyncThunk('user/loggedInUser', async () => {
  try {
    const response = await axios.get(LOGGED_USER_URL, { mode: 'cors', withCredentials: true });

    const { data } = response;
    return data;
  } catch (err) {
    return err.message;
  }
});

export default loggedIn;
