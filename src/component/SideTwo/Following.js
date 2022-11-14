import { Box, Input, Typography } from '@material-ui/core'
import { Person, Search } from '@material-ui/icons'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Following = ({ followings }) => {
    const { user } = useSelector((state) => state.user)

    const handlefollow = () => {

    }
  return (
    <Box sx={{width: '100vw', height: '100vh', background: 'antiquewhite'}}>
        <div style={{ background:'white', display: 'grid', gridTemplateColumns:'5vw auto 5vw' , padding:'1rem 2rem', marginBottom: '2rem'}}>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Person />
            </div>
            <div>
             <Input placeholder='Your Followers' variant='contained' fullWidth />
            </div>
            <div>
                <Search /> 
            </div>
        </div>

        <Box sx={{ }}>
       
            <div style={{ display:'flex', background: 'white', justifyContent: 'space-between'}}>
                <div style={{display: 'flex', alignContent: 'center', padding: '1rem 2rem', cursor: 'pointer'}}>
                    <img src={followings.profilepics.url} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
                    <div style={{display: 'flex', flexDirection: 'column', paddingLeft: '1rem'}}>
                        <Typography variant='h5'><b>{followings.name} </b></Typography>
                        <Typography variant='h7'>{followings.bio}</Typography>
                    </div>
                </div>
                <div style={{ zIndex: '3', padding: '1rem 2rem'}}>
                    <div onClick={handlefollow} style={{width: '3rem', height: '1rem', borderRadius: '1rem', border: '0.5px solid blue', background: 'blue', color: 'white', padding: '1rem', cursor:'pointer'}}>
                        Explore
                    </div>
                </div>
            </div>
        </Box>
    </Box>
  )
}

export default Following