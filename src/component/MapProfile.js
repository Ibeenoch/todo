import { Box, Input, Typography } from '@material-ui/core'
import { Person, Search } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ExploreUser from './SideTwo/ExploreUser'

const MapProfile = () => {
const { allProfile } =  useSelector((state) => state.profile)


useEffect(() => {
  console.log(allProfile)
}, [])
    return(
     !allProfile.length ?
      ( 
        <div>
        <Typography variant='h6' >No User</Typography>
        </div>
         ) : ( <>
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
           {allProfile.map((man) => (
                <ExploreUser key={man._id} man={man} />
             ))}
             </Box>
             </>
         )
    )
 
}

export default MapProfile