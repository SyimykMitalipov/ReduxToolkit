import { postAPI } from './../services/PostService';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import userReducer from './reducers/UserSlice'

const rootReducers = combineReducers({
     userReducer,
     [postAPI.reducerPath]: postAPI.reducer
})



export const setupStore = () => {
    return configureStore({
        reducer: rootReducers,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}


export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

