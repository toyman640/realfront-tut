import { createSlice } from '@reduxjs/toolkit';
import { logUser } from '../actions/login';

const initialState = {
  loggedUser: [],
};

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
        user: action.payload,
        error: null,
      }))
      .addCase(logUser.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default loginSlice.reducer;
