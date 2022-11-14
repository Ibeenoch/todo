import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import MapProfile from '../MapProfile'

const Explore = () => {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.user)
  
  useEffect(() => {
    if(!user){
        navigate('/login')
    }
   
  }, [ user])
    return (
     <div style={{ display: 'flex', flexDirection: 'column'}}>
       <MapProfile />
     </div>
    
    )
}

export default Explore
