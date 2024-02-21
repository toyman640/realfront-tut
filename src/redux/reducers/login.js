import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { logUser } from '../actions/login';

// ... (import statements)

const LOGIN_USER_URL = 'http://127.0.0.1:3000/api/v1/login';
const LOGGED_USER_URL = 'http://127.0.0.1:3000/api/v1/logged_in';

const initialState = {
  loggedUser: null,
  error: null,
  loading: false,
};

export const loggedIn = createAsyncThunk('user/loggedInUser', async () => {
  try {
    const response = await axios.get(LOGGED_USER_URL, {
      mode: 'cors',
      withCredentials: true,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const logUser = createAsyncThunk('user/loginUser', async (userInfo, { dispatch }) => {
  try {
    const response = await axios.post(LOGIN_USER_URL, userInfo, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // If login is successful, dispatch the loggedIn action
    if (response.data && response.data.user.data.attributes) {
      const loggedInResponse = await dispatch(loggedIn());

      // Return the data from loggedIn along with the logUser response
      return {
        logUserResponse: response.data,
        loggedInResponse: loggedInResponse.payload,
      };
    }

    return response.data;
  } catch (err) {
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
