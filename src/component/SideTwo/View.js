import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const View = () => {
    const { id } = useParams()


    const findPost = useSelector((state) => id ? state.blogs.viewPosts.find((item) => (item._id === id)) : null )
    const image = findPost.img.url 
  return (
    <div style={{width:'100vw', height:'100vh'}}>
        <img  style={{width:'100vw', height:'100vh'}} src={image} alt="view pics fullwidth" />
    </div>
  )
}

export default View