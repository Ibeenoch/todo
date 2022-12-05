import { Grid } from '@material-ui/core'
import React, { useEffect } from 'react'
import SideOne from './SideOne/SideOne'
import SideThree from './SideThree/SideThree'
import SideTwo from './SideTwo/SideTwo'
import './app.css'
import { useDispatch, useSelector } from 'react-redux'
import { getPost, myPosts } from '../features/blogSlice'
import { getAllProfile, getProfile } from '../features/profileSlice'
import { alluser, getFollowers, getFollowing } from '../features/userSlice'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
dispatch(getPost())
  }, [dispatch])

  useEffect(() => {
    dispatch(getProfile())
      }, [dispatch])


  useEffect(() => {
    dispatch(alluser())
 }, [dispatch])

  useEffect(() => {
      dispatch(getAllProfile())
  }, [dispatch])

  useEffect(() => {
    dispatch(getFollowers())
}, [dispatch])

useEffect(() => {
  dispatch(getFollowing())
}, [dispatch])

useEffect(() => {
  dispatch(myPosts())
}, [dispatch])


  return (
 
      <Grid container justifyContent='space-between'  alignItems='stretch' spacing={4}>
       <Grid item  xs={12} md={8} lg={6}>
         <div  style={{ width: '100%'}}>
               <SideOne/>
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: '100vw 0vw'}}>
                  <SideTwo />
               </div>
             </Grid>
  
      </Grid>

  )
}

export default Home