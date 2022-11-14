import { Box, Button, IconButton, Input, Menu, MenuItem, TextField, Typography } from '@material-ui/core'
import { ArrowBack, MenuBookOutlined, MenuOpenOutlined, Send } from '@material-ui/icons'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import p1 from '../pics/p1.png'
import p2 from '../pics/p2.jpg'

const Chat = () => {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.user)
  
  useEffect(() => {
    if(!user){
        navigate('/login')
    }
   
  }, [ user])

    const backHome = () => {
        navigate('/')
    }
  return (
    <div style={{ width: '70vw', height: '100vh', marginLeft: '15vw', borderRadius: '1.2rem'}}>
        <Box sx={{ width: '90%', height: '100%',marginLeft: '5%', background: 'white', borderRadius: '1.2rem', boxShadow: '0 0 1rem gray'}} >
          <div style={{background: 'gray', borderTopLeftRadius: '1.2rem', borderTopRightRadius: '1.2rem', color: 'white'}}>
              <Typography variant='h5' align='center' style={{ fontSize: '500', paddingTop: '0.7rem'}} >Chat</Typography>
          </div>
          
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'gray', padding: '1rem'}}>
         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', columnGap: '1.2rem'}}>
              <div onClick={backHome} style={{cursor: 'pointer'}}>
                  <ArrowBack />
              </div>
              <div>
                <img src={p2} style={{width: '50px', height: '50px', borderRadius: '50%'}} />
              </div>  
              <div>
                <Typography variant='h4'>Precious James </Typography>
             </div>
          </div>

          <div>
              <MenuOpenOutlined />
          </div>
          </div>

          <div style={{display: 'flex'}}>
             <img src={p1} style={{width: '50px', height: '50px', borderRadius: '50%',  padding: '1.2rem'}} />
             <div style={{width: 'max-content', height: 'mmax-content', background:'gray', color: 'white', fontSize: '1rem', borderRadius: '1rem', padding: '1rem', margin: '1rem 0'}}>
              <p >hello, how was your day?</p>
              <p style={{fontSize: '0.75rem'}}>21:50 pm</p>
             </div>

          </div>


          <div style={{display: 'flex'}}>
             <img src={p1} style={{width: '50px', height: '50px', borderRadius: '50%',  padding: '1.2rem'}} />
             <div style={{width: 'max-content', height: 'mmax-content', background:'gray', color: 'white', fontSize: '1rem', borderRadius: '1rem', padding: '1rem', margin: '1rem 0'}}>
              <p >hello, how was your day?</p>
              <p style={{fontSize: '0.75rem'}}>21:50 pm</p>
             </div>

          </div>
          
    

          <div style={{display: 'flex', position: 'relative', left: '75%'}}>
             <div style={{width: 'max-content', height: 'mmax-content', background:'gray', color: 'white', fontSize: '1rem', borderRadius: '1rem', padding: '1rem', margin: '1rem 0'}}>
              <p >splendid, and yours</p>
              <p style={{fontSize: '0.75rem'}}>21:58 pm</p>
             </div>
             <img src={p1} style={{width: '50px', height: '50px', borderRadius: '50%',  padding: '1.2rem'}} />

          </div>

        

          <footer>
        <form >
              <div style={{ display: 'flex', borderRadius: '1.2rem', background: 'white', boxShadow: '0 0 0.4rem gray', width: '90%', marginLeft: '1.5rem', padding:'1.2rem'}}>
                 <Input placeholder='chat' style={{width: '90vw', height: '8vh', borderBottom: 'none', paddingLeft: '1.3rem', fontSize: '1.5rem'}} /> 
             <Button   >
                 <Send />
             </Button>
              </div>
          </form> 
          </footer>
        </Box>
    </div>
  )
}

export default Chat