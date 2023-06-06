import { configureStore } from '@reduxjs/toolkit';
import authReducer from './userSlice';
import preferencesReducer from './preferenceSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        preferences: preferencesReducer,
    },
});

export default store;
