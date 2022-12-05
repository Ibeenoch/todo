import { Box, Card, CardMedia, Typography } from '@material-ui/core'
import { CameraAltTwoTone, Chat, ContactMail, Home, ListAltOutlined, LocalActivity, More, People, Place } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { alluser, deleteAccount, followUnfollow, getFollowers, getFollowing } from '../../features/userSlice'
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
  const { userfollowing } = useSelector((state) => state.user )
  const { followingmessage } = useSelector((state) => state.user )


  const handleprofile = () => {
  if(id){
    navigate(`/createprofile/${prevProfile.owner}`)  
  }  
  navigate('/createprofile')
}

const handledelete = () => {
    if(window.confirm('Are You Sure You Want To Delete This Account')){
      dispatch(deleteAccount({ navigate, toast }))
    }  
   
  }

const prevProfile = useSelector((state) => id ? state.profile.allProfile.find((item) => (item.owner === id)) : null )
 
 console.log({followingmessage: followingmessage})



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
         <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', top: '-7rem', cursor: 'pointer'}}>
             <img style={{width: '10rem', height: '10rem', borderRadius: '50%'}} src={id ? prevProfile.profilepics.url : profile.fetchProfile.map((azz) => azz.profilepics.url)}  />
         </div>

      
         <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', top: '-3rem', cursor: 'pointer'}}>
             <Typography style={{fontSize:'1.2rem'}} variant='h3'>{id ? prevProfile.handle : profile.fetchProfile.map((azz) => azz.handle)}</Typography>

         </div>

         <div style={{ marginBottom: '1.2rem', fontSize:'1rem' }}>
            {
             id ? (
                 <div onClick={handlefollow} style={{width: '100%', height: '1rem', borderRadius: '1rem', border: '0.5px solid blue', background: 'blue', color: 'white', padding: '1rem', cursor:'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                 { userfollowing.following.includes(id) ? 'unfollow'  : 'follow'}
                 </div>
             ) : (
                 <div style={{ display: 'flex', justifyContent:'space-around', alignItems:'center', width: '100%',}} >
                   <div onClick={handleprofile} style={{width: '50%',marginBottom: '1rem', height: '1rem', borderRadius: '1rem', border: '0.5px solid blue', background: 'blue', color: 'white', padding: '1rem', cursor:'pointer', display:'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}} >Edit Profile </div> 
                    <div onClick={handledelete} style={{width: '50%',marginBottom: '1rem', height: '1rem', borderRadius: '1rem', border: '0.5px solid blue', background: 'blue', color: 'white', padding: '1rem', cursor:'pointer', display:'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center'}} >Delete Account</div>
                 </div>
             ) 
              }
         </div>

         <div style={{ width: '100%', display: 'flex', justifyContent:'space-around', marginBottom: '2.5rem'}}>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity:'0.7'}} onClick={toFollowers}>
                 <People style={{fontSize:'1rem'}} />
                 <Typography style={{fontSize:'1rem'}} variant='h6'>Friends</Typography>
             </div>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity:'0.7'}} onClick={toFollowing}>
                 <ListAltOutlined style={{fontSize:'1rem'}} />
                 <Typography style={{fontSize:'1rem'}} variant='h6'>Following</Typography>
             </div>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity:'0.7'}} onClick={toChat}>
                 <Chat style={{fontSize:'1rem'}} />
                 <Typography style={{fontSize:'1rem'}} variant='h6'>Chat</Typography>
             </div>
             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', opacity:'0.7'}}>
                 <More style={{fontSize:'1rem'}} />
                 <Typography style={{fontSize:'1rem'}} variant='h6'>More</Typography>
             </div>
         </div>

         <div style={{ width: '100%', display: 'flex', flexDirection: 'column'}}>
             <div style={{cursor: 'pointer',  display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'row', columnGap: '1.2rem', marginTop: '1.2rem'}}>
               <LocalActivity style={{fontSize:'1rem'}}  />
                 <Typography style={{fontSize:'1rem'}}  variant='h6'>{id ? prevProfile.bio : profile.fetchProfile.map((azz) => azz.bio)}</Typography>
             </div>
          
             <div style={{ cursor: 'pointer', display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'row',  columnGap: '1.2rem', marginTop: '1.2rem'}}>
                 <Place  style={{fontSize:'1rem'}} />
                 <Typography  style={{fontSize:'1rem'}} variant='h6'>{id ? prevProfile.location : profile.fetchProfile.map((azz) => azz.location)}</Typography>
             </div>
             <div style={{cursor: 'pointer',  display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: 'row',  columnGap: '1.2rem', marginTop: '1.2rem'}}>
                 <ContactMail  style={{fontSize:'1rem'}} />
                 <Typography style={{fontSize:'1rem'}}  variant='h6'>{user && user.user.email}</Typography>
             </div>
         </div>
         <div style={{ textAlign: 'center', margin: '2rem'}}>
         <Typography style={{fontSize:'1rem'}}  variant='h2' >{ id ? user.user.name : 'My'} Posts</Typography>
         </div>
         <div style={{ width: '100vw'}}>
         {id ? (<MapEachPost />) : (<MapMyPost /> )}  
         </div>
        </Box>
     </div>
       )
    )
}

export default Profile
