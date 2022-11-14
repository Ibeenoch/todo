import { Box, Card, CardMedia, Typography } from '@material-ui/core'
import { CameraAltTwoTone, Chat, ContactMail, Home, ListAltOutlined, LocalActivity, More, People, Place } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { alluser, followUnfollow, getFollowers, getFollowing } from '../../features/userSlice'
import MappedPost from './MappedPost'
import { getAllProfile } from '../../features/profileSlice'
import { toast } from 'react-toastify'
import MapEachPost from './MapEachPost'
import MapMyPost from './MapMyPost'

const Profile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()
  const { profile } = useSelector((state) => state.profile)
  const { user } = useSelector((state) => state.user)



  const handlefollow = async() => {   
      const userId = prevProfile.owner
      return await Promise.all([dispatch(followUnfollow({id, toast, userId})), dispatch(alluser()) ])    

    
  }

  const findprofile = useSelector((state) => id ? state.profile.allProfile.find((item) => (item.owner=== id)) : null )

  const { followingmessage } = useSelector((state) => state.user )


  const handleprofile = () => {
  if(id){
    navigate(`/createprofile/${prevProfile.owner}`)  
  }  
  navigate('/createprofile')
}

const prevProfile = useSelector((state) => id ? state.profile.allProfile.find((item) => (item.owner === id)) : null )
 
 console.log({followingmessage: followingmessage})

useEffect(() => {
  if(!user){
      navigate('/login')
  }
 
}, [ user])

  const toFollowers = () => {
      dispatch(getFollowers())
      navigate('/followers')
  }
  
  const toFollowing = () => {
      dispatch(getFollowing())
      navigate('/following')
  }

  const toChat = () => {
      navigate('/chat')
  }

  const toprofile = () => {
      navigate('/createprofile')
  }


    return (
       Object.keys(profile).length === 0  ? (
           <div style={{display: 'flex', flexDirection: 'column', fontSize: '3rem', padding: '1.2rem', margin: '1.2rem', justifyContent: 'center', alignItems: 'center'}}>
               No Profile Available
               <div onClick={toprofile} style={{cursor: 'pointer'}}>
                 <Typography variant='h5' color='primary' >Create Profile</Typography >
               </div>
           </div>
       ) : (
        <div style={{width: '100vw', height: '100vh', background: 'antiquewhite'}}>
        <Box sx={{width: '80%', height: '100%', background: 'white', paddingTop: '1.2rem', borderRadius: '1.2rem', marginLeft: '10%'}} >
         <Card style={{ width: '80%', height: '50%', marginLeft: '10%' ,  boxShadow: '0 0 1rem gray', background: 'white',position: 'relative', borderRadius: '1.2rem'}}>
         <CardMedia image={id ? prevProfile.coverphoto.url : profile.fetchProfile.map((azz) => azz.coverphoto.url)}  style={{width: '100%', height: '100%', cursor: 'pointer'}} />
         </Card>
         <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', top: '-10rem', cursor: 'pointer'}}>
             <img style={{width: '20rem', height: '20rem', borderRadius: '50%'}} src={id ? prevProfile.profilepics.url : profile.fetchProfile.map((azz) => azz.profilepics.url)}  />
         </div>

         <div style={{width: 'max-content', height: 'max-content', padding: '1rem', borderRadius: '50%', background: 'gray', position: 'relative', top: '-14rem', right: '-50rem', cursor: 'pointer'}}>
             <CameraAltTwoTone />
         </div>
         <div style={{width: 'max-content', height: 'max-content', padding: '1rem', borderRadius: '50%', background: 'gray', position: 'relative', top: '-30rem', right: '-75rem', cursor: 'pointer' }}>
             <CameraAltTwoTone />
         </div>
         <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', top: '-10rem', cursor: 'pointer'}}>
             <Typography variant='h3'>{id ? prevProfile.handle : profile.fetchProfile.map((azz) => azz.handle)}</Typography>

         </div>

         <div style={{ marginBottom: '1.2rem' }}>
            {
             id ? (
                 <div onClick={handlefollow} style={{width: '100%', height: '1rem', borderRadius: '1rem', border: '0.5px solid blue', background: 'blue', color: 'white', padding: '1rem', cursor:'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                 { followingmessage === 'user followed' ? 'unfollow'  : 'follow'}
                 </div>
             ) : (
                 <div onClick={handleprofile} style={{width: 'auto',marginBottom: '1rem', height: '1rem', borderRadius: '1rem', border: '0.5px solid blue', background: 'blue', color: 'white', padding: '1rem', cursor:'pointer', display:'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
                     Edit Profile
                 </div>
             ) 
              }
         </div>

         <div style={{ width: '100%', display: 'flex', justifyContent:'space-around', marginBottom: '2.5rem'}}>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity:'0.7'}} onClick={toFollowers}>
                 <People />
                 <Typography variant='h6'>Friends</Typography>
             </div>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity:'0.7'}} onClick={toFollowing}>
                 <ListAltOutlined />
                 <Typography variant='h6'>Following</Typography>
             </div>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity:'0.7'}} onClick={toChat}>
                 <Chat />
                 <Typography variant='h6'>Chat</Typography>
             </div>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity:'0.7'}}>
                 <More />
                 <Typography variant='h6'>More</Typography>
             </div>
         </div>

         <div style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
             <div style={{cursor: 'pointer',  display: 'flex', flexDirection: 'row', marginLeft:'9rem', columnGap: '1.2rem', marginTop: '1.2rem'}}>
               <LocalActivity />
                 <Typography variant='h6'>{id ? prevProfile.bio : profile.fetchProfile.map((azz) => azz.bio)}</Typography>
             </div>
          
             <div style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', marginLeft:'9rem', columnGap: '1.2rem', marginTop: '1.2rem'}}>
                 <Place />
                 <Typography variant='h6'>{id ? prevProfile.location : profile.fetchProfile.map((azz) => azz.location)}</Typography>
             </div>
             <div style={{cursor: 'pointer',  display: 'flex', flexDirection: 'row', marginLeft:'9rem', columnGap: '1.2rem', marginTop: '1.2rem'}}>
                 <ContactMail />
                 <Typography variant='h6'>{user && user.user.email}</Typography>
             </div>
         </div>
         <div style={{ textAlign: 'center', margin: '2rem'}}>
         <Typography variant='h2' >{ id ? user.user.name : 'My'} Posts</Typography>
         </div>
         <div style={{ display:'grid', gridTemplateColumns: '40vw 40vw' , width: '100%', rowGap: '1.2rem'}}>
         {id ? (<MapEachPost />) : (<MapMyPost /> )}  
         </div>
        </Box>
     </div>
       )
    )
}

export default Profile
