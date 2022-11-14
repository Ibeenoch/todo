import { Box, Button, Typography } from '@material-ui/core'
import { Inbox, Mail, Message, Search } from '@material-ui/icons'
import * as React from 'react'
import p1 from '../pics/p1.png'
import p3 from '../pics/p3.jpg'
import p8 from '../pics/p8.jpg'
import p6 from '../pics/p6.jpg'
import p9 from '../pics/p9.jpg'
import p10 from '../pics/p10.jpg'
import p11 from '../pics/p11.jpg'
import { useNavigate } from 'react-router-dom'


const SideThree = () => {
  const navigate = useNavigate()

  const chat = () => {
    navigate('/chat')
  }
  return (
    <div>
<Box sx={{width: '90%', height: 'max-content', borderRadius: '1.3rem', backgroundColor: 'white'}} >
  <div style={{display: 'flex', justifyContent: 'space-between', margin:'1rem', padding: '1rem'}}>
    <Typography variant='h5'>Messages</Typography>
    <div onClick={chat} style={{cursor: 'pointer'}}>
       <Mail />
    </div>
   
  </div>

  <div style={{display: 'flex', width: '70%', backgroundColor: 'antiquewhite', borderRadius: '1.1rem', margin:'1rem', padding: '1rem'}}>
    <Search style={{fontSize: '1.7rem'}} />
    <input  type="text" placeholder='Search messages' style={{padding: '0.5rem', backgroundColor:'antiquewhite', border: 'none', fontSize: '1rem' }} />
  </div>

  <div style={{ display: 'flex', columnGap: '0.6rem'}}>
  <Typography style={{borderBottom: '4px solid grey'}} variant='h6'>Primary</Typography>
  <Typography variant='h6' >General</Typography>
  <Typography variant='h6'>Requests(7)</Typography>
  </div>

  <div>
    <div style={{ display: 'flex', padding:'1rem 0'}}>
      <img src={p8} style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '1.2rem'}} />
      <div>
        <Typography variant='h9'><b>Edem Ruth</b> </Typography>
        <p><small>just woke up bruh</small></p>
      </div>
    </div>
  </div>

  <div>
    <div style={{ display: 'flex', padding:'1rem 0'}}>
      <img src={p8} style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '1.2rem'}} />
      <div>
        <Typography variant='h9'><b>Edem Ruth</b> </Typography>
        <p><small>just woke up bruh</small></p>
      </div>
    </div>
  </div>

  <div>
    <div style={{ display: 'flex', padding:'1rem 0'}}>
      <img src={p8} style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '1.2rem'}} />
      <div>
        <Typography variant='h9'><b>Edem Ruth</b> </Typography>
        <p><small>just woke up bruh</small></p>
      </div>
    </div>
  </div>

  <div>
    <div style={{ display: 'flex', padding:'1rem 0'}}>
      <img src={p8} style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '1.2rem'}} />
      <div>
        <Typography variant='h9'><b>Edem Ruth</b> </Typography>
        <p><small>just woke up bruh</small></p>
      </div>
    </div>
  </div>
</Box>

<Typography variant='h6' style={{color: 'gray', fontWeight:'500', margin: '1.2rem'}}>Request</Typography>

<Box sx={{ height: 'max-content', width: '80%', backgroundColor: 'white', borderRadius: '1.2rem', padding:'1.2rem'}} >
<div>
    <div style={{ display: 'flex', marginTop: '1rem'}}>
      <img src={p8} style={{width: '40px', height: '40px', borderRadius: '50%', marginRight: '1.2rem'}} />
      <div>
        <Typography variant='h9'><b>Edem Ruth</b> </Typography>
        <p><small>8 mutual friends</small></p>
      </div>
    </div>
  </div>
  <div style={{margin: '1rem', padding:'1rem', display: 'flex', justifyContent: 'space-around'}}>
    <Button variant='contained' color='primary'>Accept</Button>
    <Button variant='contained'>Reject</Button>
  </div>
</Box>

</div>
  )
}

export default SideThree