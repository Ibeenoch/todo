import { combineReducers, configureStore } from '@reduxjs/toolkit'
import blogReducer from './blogSlice'
import userReducer from './userSlice'
import storage from 'redux-persist/lib/storage'
import profileReducer from './profileSlice'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blackList: ['user'],
}
 
const reducer = combineReducers({
       blogs: blogReducer,
        user: userReducer,
        profile: profileReducer,
 })

 const persistedReducer = persistReducer(persistConfig, reducer)



export const store = configureStore({
    reducer: persistedReducer
})

