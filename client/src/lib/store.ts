import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
import categoriesSlice from './features/categoriesSlice';
import cartSlice from './features/cartSlice';
import { categoriesApi } from './services/categoriesApi';
import itemsSlice from './features/itemsSlice';
import { itemsApi } from './services/itemsApi';



const storage = createWebStorage("local");

const cartPersistConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["cartItems", "itemCount", "total"],
};




const defaultMiddlewareConfig = {

  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  }
};

const cartPersistedReducer = persistReducer(cartPersistConfig, cartSlice);

const rootReducer = combineReducers({
  cart: cartPersistedReducer,
  categories: categoriesSlice,
  items: itemsSlice,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
  [itemsApi.reducerPath]: itemsApi.reducer
       
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools:  process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(defaultMiddlewareConfig).concat([ categoriesApi.middleware, itemsApi.middleware]),
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']