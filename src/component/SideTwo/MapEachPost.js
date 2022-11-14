import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post'
import { Typography } from '@material-ui/core'
import EachPost from './EachPost'

const MapEachPost = () => {
    const { aPost } = useSelector((state) => state.blogs )
  
  return (
  
    !aPost.length  ? (
      <div>
      <Typography variant='h6' >No Post, Please Create a Post, In Order To Get All Your Post</Typography>
      </div>
    ) :  (   <> 
    {aPost.map((post) => (
        <EachPost key={post._id} post={post} />
    ))}
    </>
    ) 

    

  )
}

export default MapEachPost