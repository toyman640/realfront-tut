import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { logUser } from '../actions/login';

const LOGIN_USER_URL = 'http://127.0.0.1:3000/api/v1/login';

const initialState = {
  loggedUser: null,
  error: null,
  loading: false,
};

export const logUser = createAsyncThunk('user/loginUser', async (userInfo) => {
  try {
    const response = await axios.post(LOGIN_USER_URL, userInfo, {
      withCredentials: true,
      headers:
      {
        'Content-Type': 'application/json',
      },
    });
    console.log('success', response.data);
    return response.data;
  } catch (err) {
    console.log('error', err);
    return err.message;
  }
});

const loginSlice = createSlice({
  name: 'loggedUser',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(logUser.pending, (state) => ({
        ...state,
        loading: true,
        error: null,
      }))
      .addCase(logUser.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        loggedUser: action.payload,
        error: null,
      }))
      .addCase(logUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.response.error,
      }));
  },
});

export default loginSlice.reducer;
