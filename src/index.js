import React, { useEffect } from "react";
import ReactDom from 'react-dom'
import { Provider } from "react-redux";
import { store } from "./features/store";
import App from "./App";
import { getPost } from "./features/blogSlice";
import { getProfile } from "./features/api";
import { alluser } from "./features/userSlice";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'


export let persistor = persistStore(store)

ReactDom.render(
<Provider store={store}>
    <PersistGate persistor={persistor}>
     <App />    
    </PersistGate>
</Provider>
, document.getElementById('root'))