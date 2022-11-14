import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import { Typography } from '@material-ui/core'
import EachPost from './EachPost'
import MyPost from './MyPost'

const MapMyPost = () => {
    const { mypost } = useSelector((state) => state.blogs )
  
  return (
  
    !mypost.length  ? (
      <div>
      <Typography variant='h6' >No Post</Typography>
      </div>
    ) :  (   <> 
    {mypost.map((post) => (
        <MyPost key={post._id} post={post} />
    ))}
    </>
    ) 

    

  )
}

export default MapMyPost