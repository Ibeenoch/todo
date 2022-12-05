import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'

const Status = ({ post }) => {
  const { profile } = useSelector((state) => state.profile )

  return (
    <div style={{display: 'flex',background:'gray', borderRadius:'1.5rem',border:'2px solid white', columnGap: '0.6rem', marginRight: '1.2rem', marginTop: '1.2rem', width:'80%' }} item xs='auto' lg='auto'>
    <Paper elevation={9} style={{display: 'flex', flexDirection: 'column', height: '14rem', justifyContent: 'space-between', borderRadius: '1.4rem', width: '10rem', backgroundImage: `url('${post.img.url}')`}}>
     <div style={{width: '50px', height: '50px', borderRadius: '50%', border: '3px solid white', marginLeft: '25%', marginTop: '1rem'}}>
      <img src={post.owner.profilepics.url} alt='one' style={{width: '50px', height: '50px',  borderRadius: '50%' }} />
   </div>
       <Typography variant='h6'  style={{margin: '0.4rem', padding: '0.4rem', color: 'white', fontSize:'1rem'}}>{post.owner.name}</Typography>
    </Paper>
    </div>
  )
}

export default Status