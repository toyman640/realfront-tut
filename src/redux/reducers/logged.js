import { createSlice } from '@reduxjs/toolkit';
import { loggedIn } from '../actions/islogged';

const initialState = {
  loggedInUser: [],
};

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
