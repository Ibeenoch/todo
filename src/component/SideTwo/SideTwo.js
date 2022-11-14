import * as React from 'react'
import { Box, Button, Input } from '@material-ui/core'
import { Link, useNavigate } from 'react-router-dom'
import MappedPost from './MappedPost'
import { useDispatch, useSelector } from 'react-redux'
import MapStatus from './MapStatus'



const SideTwo = () => {

  const { user } = useSelector((state) => state.user)
  const { profile } = useSelector((state) => state.profile) 

  const hide = (e) =>{
    e.target.style.display = 'none'
   }

  return (
    <div style={{ width: '100%'}}>
 

   <div style={{display: 'flex', flexDirection: 'row', maxWidth: '100%'}}>
   <MapStatus />
</div>
    
    <Link to='/postpage'>
   <form>
  <Box sx={{ width: '100%', display: 'flex', marginTop: '1.2rem', borderRadius: '1.2rem', background: 'white', columnGap: '0.4rem', padding:'0.6rem 0.5rem'}}>
      <img src={user.user.profilepics.url || profile.fetchProfile && profile.fetchProfile.map((item) => item.profilepics.url)} onError={(e) => e.target.style.display='none'} style={{width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer'}} />
      <div style={{ width: '100%'}} >
        <Input  type='text' style={{ width: '60%'}} placeholder='What"s on your mind'/>
      
      </div>
      <Button variant='contained' style={{ width: '20%', fontSize: '1rem'}} color='primary' > Post</Button>
      
    
      </Box>
     </form>
     </Link>



<div style={{ display: 'flex', flexDirection: 'column'}}>
<MappedPost />
</div>
    


  </div>
  )
}

export default SideTwo