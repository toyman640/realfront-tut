import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginReducer from './reducers/login';
import loggedinReducer from './reducers/logged';

const persistConfig = {
  key: 'login',
  timeout: 100,
  version: 1,
  storage,
};

const persistedLoginReducer = persistReducer(persistConfig, loginReducer);

const rootReducer = combineReducers({
  login: persistedLoginReducer,
  logged: loggedinReducer,
  // Add other reducers here if needed
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export default store;
