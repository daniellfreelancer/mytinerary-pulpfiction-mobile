 import { configureStore }   from "@reduxjs/toolkit";
 import { setupListeners } from '@reduxjs/toolkit/query'
import citiesAPI from "./src/features/citiesAPI";
import userAPI from "./src/features/userAPI";
import authReducer from "./src/features/userAuth";
import itineraryAPI from "./src/features/itineraryAPI";

 const store = configureStore({
    // reducer: mainReducer,

    reducer: {
        auth: authReducer,
        [citiesAPI.reducerPath]: citiesAPI.reducer,
        [userAPI.reducerPath]: userAPI.reducer,
        [itineraryAPI.reducerPath]: itineraryAPI.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(userAPI.middleware),



  })

  setupListeners(store.dispatch)
  export default store