import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { loggedIn } from '../actions/islogged';

const LOGGED_USER_URL = 'http://127.0.0.1:3000/api/v1/logged_in';

const initialState = {
  loggedInUser: [],
  loading: false,
};

export const loggedIn = createAsyncThunk('user/loggedInUser', async () => {
  try {
    const response = await axios.get(LOGGED_USER_URL, { mode: 'cors', withCredentials: true });
    console.log(response);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const loggedinSlice = createSlice({
  name: 'loggedUser',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loggedIn.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(loggedIn.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        loggedInUser: action.payload,
        error: null,
      }))
      .addCase(loggedIn.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default loggedinSlice.reducer;
