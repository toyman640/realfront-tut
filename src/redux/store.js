import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import loginReducer from './reducers/login';
import loggedinReducer from './reducers/logged';

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    logged: loggedinReducer,
  },
});

export default store;
