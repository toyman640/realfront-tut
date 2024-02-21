// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const LOGIN_USER_URL = 'http://127.0.0.1:3000/api/v1/login';

// export const logUser = createAsyncThunk('user/loginUser', async (userDetails) => {
//   try {
//     const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
//     const response = await axios.post(LOGIN_USER_URL, userDetails, {
//       withCredentials: true,
//       headers: {
//         'Content-Type': 'application/json',
//         'X-CSRF-Token': csrfToken,
//       },
//     });

//     const { data } = response;
//     return data;
//   } catch (err) {
//     return err.message;
//   }
// });

// export default logUser;
