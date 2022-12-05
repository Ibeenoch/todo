import React from 'react'
import { useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import Status from './Status'

const MapStatus = () => {
    const { blogg } = useSelector((state) => state.blogs )

  return (
  
    !blogg.length  ? (
      <div>
      <Typography variant='h6' >No Status</Typography>
      </div>
    ) :  (   <section style={{display:'flex' ,maxWidth:'100vw', overflow:'auto', background:'gray', }}> 
    {blogg.map((post) => (
       <Status key={post._id} post={post} />
    ))}
    </section>
    ) 

    

  )
}

export default MapStatus