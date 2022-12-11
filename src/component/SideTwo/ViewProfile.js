import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ViewProfile = () => {
    const { id } = useParams()

    const findprofile = useSelector((state) => id ? state.profile.profile.fetchProfile.find((item) => (item._id === id)) || state.profile.allProfile.find((item) => (item.owner === id))  : null )
    const image = findprofile.profilepics.url
  return (
    <div style={{width:'100vw', height:'100vh'}}>
        <img  style={{width:'100vw', height:'100vh'}} src={image} alt="view pics fullwidth" />
    </div>
  )
}

export default ViewProfile