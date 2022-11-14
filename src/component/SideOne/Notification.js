import React from 'react'
import p3 from '../pics/p3.jpg'
import { Typography } from '@material-ui/core'

const Notification = () => {
  return (
    <div style={{ background: 'antiquewhite'}}>

     <div style={{ background: 'white', borderRadius: '1.2rem', width: 'auto', margin: '3rem', padding:'2rem'}}>
     
       <div style={{ display: 'flex', padding: '1rem'}} >
         <img src={p3} style={{ width: '50px', height:'50px', borderRadius: '50%'}}/>
         <div style={{marginLeft: '1rem'}}>
           <Typography variant='h6'><b>Keke Benjamin</b> accepted your friend request</Typography>
           <p ><small>1 DAYS AGO</small></p>
         </div>
       </div>

       <div style={{ display: 'flex', padding: '1rem'}} >
         <img src={p3} style={{ width: '50px', height:'50px', borderRadius: '50%'}}/>
         <div style={{marginLeft: '1rem'}}>
           <Typography variant='h6'><b>Joe Billy</b> liked your post</Typography>
           <p ><small>20 MINUTES AGO</small></p>
         </div>
       </div>

       <div style={{ display: 'flex', padding: '1rem'}} >
         <img src={p3} style={{ width: '50px', height:'50px', borderRadius: '50%'}}/>
         <div style={{marginLeft: '1rem'}}>
           <Typography variant='h6'><b>John Doe</b> commented on your post </Typography>
           <p ><small>1 HOUR AGO</small></p>
         </div>
       </div>

       <div style={{ display: 'flex', padding: '1rem'}} >
         <img src={p3} style={{ width: '50px', height:'50px', borderRadius: '50%'}}/>
         <div style={{marginLeft: '1rem'}}>
           <Typography variant='h6'><b>Mary Oppong</b> liked your post</Typography>
           <p ><small>3 DAYS AGO</small></p>
         </div>
       </div>

       <div style={{ display: 'flex', padding: '1rem'}} >
         <img src={p3} style={{ width: '50px', height:'50px', borderRadius: '50%'}}/>
         <div style={{marginLeft: '1rem'}}>
           <Typography variant='h6'><b>Dada Nico</b> accepted your friend request</Typography>
           <p ><small>3 DAYS AGO</small></p>
         </div>
       </div>

     </div>

    </div>
  )
}

export default Notification