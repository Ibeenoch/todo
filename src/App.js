import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './component/Login'
import NavBar from './component/NavBar'
import Register from './component/Register'
import Comment from './component/SideOne/Comment'
import Notify from './component/SideOne/Notify'
import Chat from './component/SideThree/Chat'
import Explore from './component/SideTwo/Explore'
import { useDispatch } from 'react-redux'
import Postpage from './component/SideTwo/Postpage'
import CreateProfile from './component/CreateProfile'
import axios from 'axios'
import { setLogin } from './features/userSlice'
import Loading from './component/SideTwo/Loading'
import Profile from './component/SideTwo/Profile'
import LoadLike from './component/SideTwo/LoadLike'
import Mapfollower from './component/SideTwo/Mapfollower'
import MapFollowing from './component/SideTwo/MapFollowing'

const App = () => {

  const user =  JSON.parse(localStorage.getItem('user'))
const dispatch = useDispatch()

useEffect(() => {
 dispatch(setLogin(user))
}, [])

useEffect(() => {
  if('user' in localStorage){
    const login = JSON.parse(localStorage.getItem('user'))
    axios.defaults.headers.common["authorization"] = `Bearer ${login.token}`
  }
}, [user]) 


  return (
    <Router>
       <div>
         <NavBar/>
             
       </div>
      
       <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/login' element={<Login/>} />
         <Route path='/register' element={<Register />} />
         <Route path='/notify' element={<Notify />} /> 
         <Route path='/comment/:id' element={ <Comment />} />
         <Route path='/chat' element={<Chat />} />
         <Route path='/profile' element={<Profile />} />
         <Route path='/profile/:id' element={<Profile />} />
         <Route path='/followers' element={<Mapfollower />} />
         <Route path='/following' element={<MapFollowing />} />
         <Route path='/explore' element={<Explore />} />
         <Route path='/postpage/:id' element={<Postpage />} />
         <Route path='/postpage' element={<Postpage />} />
         <Route path='/createprofile' element={ <CreateProfile /> } />
         <Route path='/createprofile/:id' element={ <CreateProfile /> } />
         <Route path='/loading/:id' element={ <Loading /> } />
         <Route path='/loadlike' element={ <LoadLike /> } />
       </Routes>
        <ToastContainer />
    </Router>
   
  )
}

export default App