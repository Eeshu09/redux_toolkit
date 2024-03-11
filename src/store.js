// import { configureStore } from "@reduxjs/toolkit";
// import cartSlice from './cartSlice'
// export const store=configureStore({
//     reducer:{ 
//         allcart:cartSlice,


//     } 
     
// })

import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from './cartSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    allcart: persistedReducer,
  },
});

export const persistor = persistStore(store);
