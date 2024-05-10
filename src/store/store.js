import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSclice';
import hotelSlice from './hotelSclice';

const store = configureStore({
    reducer: {
        auth : authSlice,
        //TODO: add more slices here for posts
        hotel:hotelSlice
    }
});


export default store;