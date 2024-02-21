// import { createSlice } from '@reduxjs/toolkit';
// import { createUser } from '../actions/signup';

// const initialState = {
//   user: [],
//   loggedUser: [],
//   loading: false,
//   error: null,
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(createUser.pending, (state) => ({
//         ...state,
//         loading: true,
//         error: null,
//       }))
//       .addCase(createUser.fulfilled, (state, action) => ({
//         ...state,
//         loading: false,
//         user: action.payload,
//         error: null,
//       }))
//       .addCase(createUser.rejected, (state, action) => ({
//         ...state,
//         loading: false,
//         error: action.error.message,
//       }));
//   },
// });

// export default userSlice.reducer;
