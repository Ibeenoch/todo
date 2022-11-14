import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import { Typography } from '@material-ui/core'

const MappedPost = () => {
    const { blogg } = useSelector((state) => state.blogs )
  
  return (
  
    !blogg.length  ? (
      <div>
      <Typography variant='h6' >No Post, Please Create a Post, In Order To Get All Your Post</Typography>
      </div>
    ) :  (   <> 
    {blogg.map((post) => (
        <Post key={post._id} post={post} />
    ))}
    </>
    ) 

    

  )
}

export default MappedPost