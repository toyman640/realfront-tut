import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import loginReducer from './reducers/login';

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
  },
});

export default store;
