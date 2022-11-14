import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Notification from './Notification'

const Notify = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.user)

useEffect(() => {
  if(!user){
      navigate('/login')
  }
 
}, [ user])
  return (
    <div style={{ }}>
  
        <div><Notification /></div>
    </div>
  )
}

export default Notify