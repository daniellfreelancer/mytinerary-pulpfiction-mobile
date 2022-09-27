 import { configureStore }   from "@reduxjs/toolkit";
 import { setupListeners } from '@reduxjs/toolkit/query'
import citiesAPI from "./src/features/citiesAPI";

 const store = configureStore({
    // reducer: mainReducer,

    reducer: {
        [citiesAPI.reducerPath]: citiesAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(citiesAPI.middleware),
  })

  setupListeners(store.dispatch)
  export default store