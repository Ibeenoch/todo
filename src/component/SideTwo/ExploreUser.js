import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getPostsOfPerson } from '../../features/blogSlice'
import { getAllProfile, getProfile } from '../../features/profileSlice'
import { alluser, followUnfollow } from '../../features/userSlice'


const ExploreUser = ({ man }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
    const handleprofile = async() => {
  
   navigate(`/profile/${man.owner}`) 
   return await Promise.all([dispatch(getAllProfile()), dispatch(alluser()), dispatch(getProfile()), dispatch(getPostsOfPerson(man.owner)) ])    
}



  return (
        <Box >
       
            <div style={{ display:'flex', background: 'white', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', alignContent: 'center', padding: '1rem 2rem', cursor: 'pointer'}}>
                    <img onClick={handleprofile} src={man.profilepics.url} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
                    <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '1rem'}}>
                        <Typography variant='h5'><b>{man.handle} </b></Typography>
                        <Typography variant='h7'>{man.bio}</Typography>
                    </div>
                </div>
                <div style={{ zIndex: '3', padding: '1rem 2rem'}}>
                    <div onClick={handleprofile} style={{width: '3rem', height: '1rem', borderRadius: '1rem', border: '0.5px solid blue', background: 'blue', color: 'white', padding: '1rem', cursor:'pointer'}}>
                      Explore
                    </div>
                </div>
            </div>
        </Box>
  
  )
}

export default ExploreUser